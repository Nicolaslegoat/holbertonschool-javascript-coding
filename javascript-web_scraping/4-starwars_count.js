#!/usr/bin/node
/* eslint-disable */

const request = require('request');
const apiURL = process.argv[2];
const characterID = 18;

request(apiURL, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    const moviedata = JSON.parse(body).results;
    const wedgeantilles = moviedata.filter((movie) =>
      movie.characters.some((character) => character.includes(`/people/${characterID}/`))
    );
    console.log(wedgeantilles.length);
  }
});