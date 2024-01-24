#!/usr/bin/node
/* eslint-disable */

const request = require('request');
const url = process.argv[2];

request(url, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});j