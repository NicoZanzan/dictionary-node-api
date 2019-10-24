const axios = require("axios");

const word_id = process.argv[2];

const keyApi = `b9704142a5fa9722489ecbbe569f7c2a`;

const languague_code = "en-us";

const appId = `89dba59a`;

const endpoint = "entries";

axios.defaults.headers.common["app_id"] = appId;
axios.defaults.headers.common["app_key"] = keyApi;



const url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${languague_code}/${word_id}`;

async function getWordDefinition() {
  try {
    const response = await axios.get(url);
    const word = response.data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses;
    const type = response.data.results[0].lexicalEntries[0].lexicalCategory.text;
    console.log(`${word_id} ${type}`);
    word.forEach((element, i) => {
      console.log(`${i + 1}. ${element.shortDefinitions[0]}`);
    });

  } catch (error) {
    console.log(`No word found!`);
  }
}

getWordDefinition();