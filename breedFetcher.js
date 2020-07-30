const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const inputUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(inputUrl, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback(`Breed "${breedName}" not found, please try again`, null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };