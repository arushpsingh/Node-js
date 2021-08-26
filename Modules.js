const fs = require("fs");
let text = fs.readFileSync("Normal.txt", "utf-8");
console.log(text);

text = text.replace("Normal", "Arush");
console.log("The content of the file is");
console.log(text);

console.log("Creating new file");
fs.writeFileSync("Arush.txt", text);