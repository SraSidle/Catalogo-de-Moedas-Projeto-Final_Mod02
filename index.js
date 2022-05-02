// require ('dotenv').config(); Dá erro
// import express from 'express';
// import path from 'path';
// import {config} from 'dotenv';
// import routes from 'express'; // era pra fazer o abaixo mas não encontava o módulo
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
// const routes = require('./src/routes/routes'); Por algum motivo endiabrado não está se conectando à pasta

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
// app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
