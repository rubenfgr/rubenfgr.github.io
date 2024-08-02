import React, { useState, useEffect, useRef } from "react";
import FlexSearch from "flexsearch";
import documents from "../../static/search-index.json";
import "./SearchBar.scss";
import removeMarkdown from "remove-markdown";
import { useHistory } from "@docusaurus/router";

interface Document {
  id: number;
  title: string;
  content: string;
  path: string;
}

const index = new FlexSearch.Document<Document>({
  document: {
    id: "id",
    index: ["title", "content"],
  },
});

export default function SearchBarWrapper() {
  const [query, setQuery] = useState("");
  const [searchTitleResults, setSearchTitleResults] = useState<Document[]>([]);
  const [searchContentResults, setSearchContentResults] = useState<Document[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<(HTMLLIElement | null)[]>([]);
  const history = useHistory();

  useEffect(() => {
    documents.forEach((doc) => index.add(doc));

    // Manejador para abrir la búsqueda con Ctrl + F
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "f") {
        event.preventDefault();
        setIsModalOpen(true);
      } else if (event.key === "Escape") {
        console.log(event.key);
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const searchResults = index.search(value, {
        index: ["title", "content"],
      });
      const docsIdsResultByTitle =
        searchResults.find((searchResult) => searchResult.field === "title")
          ?.result ?? [];
      const docsIdsResultByContent =
        searchResults.find((searchResult) => searchResult.field === "content")
          ?.result ?? [];
      const docsByTitleResult = documents.filter((doc) =>
        docsIdsResultByTitle.includes(doc.id)
      );
      const docsByContentResult = documents.filter((doc) =>
        docsIdsResultByContent.includes(doc.id)
      );
      setSearchTitleResults(docsByTitleResult);
      setSearchContentResults(docsByContentResult);
    } else {
      setSearchTitleResults([]);
      setSearchContentResults([]);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  function handleNavigate(path: string): void {
    history.push("/docs" + path);
    toggleModal();
  }

  const handleKeyDown = (event: React.KeyboardEvent<any>, index: number) => {
    if (event.key === "Enter" && resultRefs.current[index]) {
      handleNavigate(resultRefs.current[index]?.dataset.path || "");
    }
  };

  return (
    <>
      <div className="search-icon" onClick={toggleModal}>
        🔍
      </div>
      {isModalOpen && (
        <div className="search-modal" onClick={handleBackdropClick}>
          <div className="search-modal--content">
            <div className="search-modal--header">
              <span className="search-modal--header-title">Buscador de documentación</span>
              <span className="search-modal--header-close" onClick={toggleModal}>
                &times;
              </span>
            </div>
            <input
              tabIndex={0}
              className="search-modal--input"
              ref={inputRef}
              type="text"
              placeholder="Buscar..."
              value={query}
              onChange={handleSearch}
            />
            <div className="search-results">
              {searchTitleResults.length > 0 && (
                <>
                  <h3>Resultados por título</h3>
                  <ul>
                    {searchTitleResults.map((result, index) => (
                      <li
                        tabIndex={0}
                        ref={(el) => (resultRefs.current[index] = el)}
                        data-path={result.path}
                        className="search-results--item"
                        key={`${index}-${result.id}`}
                        onClick={() => handleNavigate(result.path)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                      >
                        <span className="search-results--item-title">{result.title}</span>
                        <span className="search-results--item-path">{result.path}</span>
                        <span className="search-results--item-content">
                          {removeMarkdown(result.content).substring(0, 100)}...
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {searchContentResults.length > 0 && (
                <>
                  <h3>Resultados por contenido</h3>
                  <ul>
                    {searchContentResults.map((result, index) => (
                      <li
                        tabIndex={0}
                        ref={(el) => (resultRefs.current[searchTitleResults.length + index] = el)}
                        data-path={result.path}
                        className="search-results--item"
                        key={`${index}-${result.id}`}
                        onClick={() => handleNavigate(result.path)}
                        onKeyDown={(event) => handleKeyDown(event, searchTitleResults.length + index)}
                      >
                        <span className="search-results--item-title">{result.title}</span>
                        <span className="search-results--item-path">{result.path}</span>
                        <span className="search-results--item-content">
                          {removeMarkdown(result.content).substring(0, 100)}...
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
