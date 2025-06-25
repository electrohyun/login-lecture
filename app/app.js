"use strict";

// 모듈
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use("/", home); // use -> 미들웨어를 등록해주는 메서드...

module.exports = app;