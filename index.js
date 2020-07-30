const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Error: ${error.code}\nResource ${error.hostname} not found`);
  } else {
    console.log(desc);
  }
});