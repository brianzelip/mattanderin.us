'use strict';

const axios = require('axios').default;
require('dotenv').config();

const buildHook = `https://api.netlify.com/build_hooks/${process.env.HOOK_ID}`;
const branch = 'master';
const title = 'triggered+by+submission-created+build+hook';
const params = `?trigger_branch=${branch}&trigger_title=${title}`;

exports.handler = function(event, context, callback) {
  axios
    .post(`${buildHook}${params}`, {})
    .then(function(response) {
      console.log(response);
      callback(null, {
        statusCode: 201,
        body: 'Comment submitted!'
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
