const express = require("express");
const server = express();
const path = require("path");
const apiRoutes = require("./routes/todos");

server.use(express.static(path.join(__dirname, "..", "public")));
server.use(express.json());

server.use("/api/v1/todos", apiRoutes);

module.exports = server;
