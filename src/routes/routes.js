import express from "express";
export const routes = express.Router();

import {
  getAll,
  register,
  add,
  getById,
  update,
  del,
  details,
  searchByName,
} from "../controllers/CoinController.js";

routes.get("/", getAll);
routes.get("/register", register);
routes.post("/add", add);
routes.get("/getById/:id/:method", getById);
routes.post("/update/:id", update);
routes.get("/del/:id", del);
routes.get("/details/:id", details);
routes.post("/search", searchByName);