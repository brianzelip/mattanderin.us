'use strict';

const axios = require('axios').default;
require('dotenv').config();

const buildHook =
  'https://api.netlify.com/build_hooks/5e49370b645e93bc77b1e743';
const branch = 'render-comments';
const title = 'triggered+by+submission-created+build+hook';
const params = `?trigger_branch=${branch}&trigger_title=${title}`;

exports.handler = function(event, context) {
  axios
    .post(`${buildHook}${params}`, {})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
