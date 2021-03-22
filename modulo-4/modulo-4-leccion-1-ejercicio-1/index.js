const fs = require("fs");

// ejercicio 1

// const add = (a, b) => a + b;

// console.log(add(3, 5));
// console.log(add(13, 45));

// ejercicio 2

// const text = "Lorem ipsum";

// const content = {
//   originalContent: "Lorem ipsum",
//   changedContent: "LOREM IPSUM",
//   textLenght: 11,
// };

// console.log(content);

// const handleWriteFile = (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("evth's all right");
//   }
// };

// const contentInString = JSON.stringify(content);

// fs.writeFile("newfile.json", contentInString, handleWriteFile);

// ejercicio 3

// const handleFile = (err, fileContent) => {
//   if (err !== null) {
//     console.log(err);
//   } else {
//     console.log("El contenido", fileContent);
//     console.log("La longitud", fileContent.length);
//   }
// };

// fs.readFile("./input-file.txt", "utf8", handleFile);

const readFile3 = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
};

const writeFile3 = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

const handleContent3 = (data) => {
  const newContent3 = {
    originalContent: data,
    modifiedContent: null,
    length: data.length,
  };
  console.log(newContent3);
  const contentInString = JSON.stringify(newContent3);
  writeFile3("./output.json", contentInString, () => {
    console.log("The file has been copied!");
  });
};

const obj = readFile3("./input-file.txt", handleContent3);

// console.log(obj);
