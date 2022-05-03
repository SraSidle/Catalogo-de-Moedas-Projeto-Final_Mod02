// const routes = require("express").Router();
// import express from "express";//.Router()
const routes = require("express").Router();
const CoinController = require("../controllers/CoinController");
const Coin = require("../models/Coin");

routes.get("/" , CoinController.getAll);
routes.get("/register" , CoinController.register);
routes.post("/add" , CoinController.add);
routes.get("/getById/:id/:method" , CoinController.getById);

module.exports = routes