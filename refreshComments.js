'use strict';

const axios = require('axios').default;

require('dotenv').config();

const API = 'https://api.netlify.com/api/v1/';
const auth = `?access_token=${process.env.API_AUTH}`;
const form = `/api/v1/forms/:form_id/submissions`;
const sites = `/api/v1/sites`;
const site_id = '8fdefce4-645a-42d5-8974-c63c6d695fa1';
const form_id = '5e04cd60af1af50008ce205e';

axios
  .get(`${API}/forms/${form_id}/submissions${auth}`)
  .then(function(response) {
    console.log(response.data);
    // const site = response.data.filter(obj => obj.name === 'matt-and-erin');
    // console.log('site_id is:::', site[0].site_id);
  })
  .catch(function(error) {
    console.log(error);
  });
