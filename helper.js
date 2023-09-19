const fs = require("fs");

const readFile = (filePath) => {
  return new Promise((res, rej) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) rej(err);
      else res(JSON.parse(data));
    });
  });
};
const writeFile = (filePath,data) =>{
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath,data,(err)=>{
      if(err) reject(err)
      else resolve("success")
    })
  })
}

module.exports = { readFile, writeFile };
