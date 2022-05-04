import express from "express";
import path from "path";
import { routes } from "./src/routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const __dirname = path.resolve(path.dirname(""));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(routes);

app.listen(port, () => {
  console.clear();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
