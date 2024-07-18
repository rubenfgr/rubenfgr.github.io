"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var matter = require("gray-matter");
var flexsearch = require("flexsearch");
var contentDir = path.join(__dirname, 'docs'); // Ajusta esto a la ubicación de tus archivos .mdx
var searchIndexFile = path.join(__dirname, 'static', 'search-index.json');
// Configura el índice de FlexSearch
var index = new flexsearch.Document({
    tokenize: "forward",
    cache: true,
    charset: "latin:extra",
    document: {
        id: "id",
        index: ["title", "content"],
        store: ["title", "path"]
    }
});
var documents = [];
var id = 0;
// Función para leer todos los archivos .mdx en el directorio
function getAllFiles(dir, fileList) {
    if (fileList === void 0) { fileList = []; }
    var files = fs.readdirSync(dir);
    files.forEach(function (file) {
        var filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            fileList = getAllFiles(filePath, fileList);
        }
        else if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}
// Procesar cada archivo .mdx
getAllFiles(contentDir).forEach(function (file) {
    var fileContent = fs.readFileSync(file, 'utf8');
    var _a = matter(fileContent), data = _a.data, content = _a.content;
    // Extraer el título del primer encabezado h1 del contenido
    var titleMatch = content.match(/^#\s+(.*)/m);
    var title = titleMatch ? titleMatch[1] : path.basename(file, path.extname(file));
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
