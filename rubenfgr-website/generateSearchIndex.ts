import * as fs from 'fs';
import * as path from 'path';
import * as matter from 'gray-matter';
import * as flexsearch from 'flexsearch';

interface Document {
  id: number;
  title: string;
  content: string;
  path: string;
}

const contentDir = path.join(__dirname, 'docs'); // Ajusta esto a la ubicación de tus archivos .mdx
const searchIndexFile = path.join(__dirname, 'static', 'search-index.json');

// Configura el índice de FlexSearch
const index = new flexsearch.Document({
  tokenize: "forward",
  cache: true,
  charset: "latin:extra",
  document: {
    id: "id",
    index: ["title", "content"],
    store: ["title", "path"]
  }
});

let documents: Document[] = [];
let id = 0;

// Función para leer todos los archivos .mdx en el directorio
function getAllFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList = getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Procesar cada archivo .mdx
getAllFiles(contentDir).forEach(file => {
  const fileContent = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(fileContent);

  // Extraer el título del primer encabezado h1 del contenido
  const titleMatch = content.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1] : path.basename(file, path.extname(file));

  documents.push({
    id: id++,
    title: title,
    content: content,
    path: file.replace(contentDir, '').replace(/\\/g, '/').replace('.mdx', '').replace('.md', ''),
  });
});

// Agregar documentos al índice
index.add(documents);

// Guardar el índice en un archivo JSON
fs.writeFileSync(searchIndexFile, JSON.stringify(documents, null, 2));
