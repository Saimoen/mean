/* Imports nécessaire à mon app Express */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

/* Middleware nécessaire à mon app Express */
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
/* Permet la connexion à la base de donnée */
mongoose
  .connect("mongodb+srv://GreksO:Gregsaimoen12@meanapp.u4r8eht.mongodb.net/")
  .then(() => {
    console.log("Connexion opened to mongodb!");
  })
  .catch((error) => {
    console.log(error);
  });

/* Requête get => return index.html */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = app;