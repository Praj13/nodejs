const path= require('path');

console.log("directory name",path.dirname(__filename));
console.log("directory name",path.basename(__filename));
console.log("directory name",path.extname(__filename));

console.log("Join path",path.join("/home","index","user"));
console.log("Normalized path",path.normalize("/home/../documents/index.js"));
console.log("Resolve path",path.resolve("/home","index","user"));
