// const routes = require("express").Router();
// import express from "express";//.Router()
const routes = require("express").Router();
const CoinsController = require("../controllers/CoinsController");

routes.get("/" , CoinsController.getAll);

modules.export = routes;