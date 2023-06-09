"use strict";

const path = require("path");
const express = require("express");

const router = require("./controllers");

const app = express();

app.set("port", 3002);

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
