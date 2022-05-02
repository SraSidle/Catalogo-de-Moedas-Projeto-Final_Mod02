const routes = require("express").Router();
// import routes from 'express'; //.Router()
import {CoinsController} from "../controllers/CoinsController";

routes.get("/" , CoinsController.getAll);

modules.export = routes;