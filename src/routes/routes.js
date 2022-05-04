import express from "express";
export const routes = express.Router();

import {
  getAll,
  register,
  add,
  getById,
  update,
} from "../controllers/CoinController.js";

routes.get("/" , getAll);
routes.get("/register" , register);
routes.post("/add" , add);
routes.get("/getById/:id/:method" , getById);

