'use strict';

const fs = require('fs');
const axios = require('axios').default;
require('dotenv').config();

const url = 'https://api.netlify.com/api/v1/';
const auth = `?access_token=${process.env.API_AUTH}`;
const form_id = '5e04cd60af1af50008ce205e';
const API = `${url}/forms/${form_id}/submissions${auth}`;

axios
  .get(`${API}`)
  .then(function(response) {
    fs.writeFileSync(
      './data/comments.json',
      JSON.stringify(response.data, null, 2)
    );
    console.log(
      `Comments data generated!\nThere are ${response.data.length} total comments.`
    );
  })
  .catch(function(error) {
    console.log(error);
  });
