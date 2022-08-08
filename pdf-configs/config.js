module.exports = {
  stylesheet: "./pdf-configs/style.css",
  pdf_options: {
    "format": "A4",
    "margin": "20mm",
    "printBackground": true,
    "headerTemplate": "<style>\n  section {\n    margin: 0 auto;\n    font-size: 9px;\n  }\n</style>",
    "footerTemplate": "<section>\n  <div>\n    <span class=\"pageNumber\"></span>\n    / <span class=\"totalPages\"></span>\n  </div>\n</section>"
  },
};