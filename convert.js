const fs = require('fs');

const languageCodesObject = require('./language-codes.json');

const languageCodesArray = Object.keys(languageCodesObject).map(key => {
  return languageCodesObject[key]
});

const dataToSave = JSON.stringify(languageCodesArray, null, 2);

fs.writeFileSync('language-codes-array.json', dataToSave);