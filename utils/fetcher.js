const express = require("express");
const router = express.Router();
const fetech = require("node-fetch");

module.exports = {
  dataFetcher: async function (url) {

    let data = await fetech(url);
    let real = await data.json();

    return real; // promise
  },
};
