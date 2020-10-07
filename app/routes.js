const express = require("express");
const path = require("path");
const responder = require("./responder");
const resources = require("./resources");
const { healthcheck } = resources;

module.exports = function routes() {
  const routes = new express.Router();

  routes.get("/healthcheck", healthcheck.get);
  routes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  routes.all("*", (req, res) => responder.rejectNotFound(res));

  return routes;
};
