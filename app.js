console.log("NodeJS Lab 03 Started");

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
