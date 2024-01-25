#!/usr/bin/node
/* eslint-disable */

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
    if (err) {
        console.error(err);
    } else {
        const todos = JSON.parse(body);
        const completedtaskbyuser = {};

        todos.forEach((todo) => {
            if (todo.completed) {
                if (completedtaskbyuser[todo.userID]) {
                    completedtaskbyuser[todo.userID];
                } else {
                    completedtaskbyuser[todo.userID] = 1;
                }
            }
        });

        console.log(completedtaskbyuser);
    }
});