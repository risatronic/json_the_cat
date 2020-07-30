const request = require('request');
const catType = process.argv[2];
const inputUrl = `https://api.thecatapi.com/v1/breeds/search?q=${catType}`;

request(inputUrl, (error, response, body) => {
  if (error) {
    return console.log(`Error: ${error.code}\nResource ${error.hostname} not found`);
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`Breed "${catType}" not found, please try again`);
  } else {
    console.log(`${data[0].name}: ` + data[0].description);
  }
});