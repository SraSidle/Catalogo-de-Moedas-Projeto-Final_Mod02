import { Coin } from "../models/Coin.js";

let message = "";
let type = "";

export const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = "",
      type = ""
    }, 1000)
    const coins = await Coin.findAll({ order: [["id", "ASC"]] });
    res.render("index", {
      coins,
      coinPut: null,
      coinDel: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const register = (req, res) => {
  try {
    res.render("register", { message, type });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const add = async (req, res) => {
  try {
    const coin = req.body;

    if (
      !coin.nome ||
      !coin.denomination ||
      !coin.topic ||
      !coin.period_ ||
      !coin.years ||
      !coin.composition ||
      !coin.typeboard ||
      !coin.picture_front ||
      !coin.picture_back
    ) {
      message = "Fill in all fields correctly";
      type = "danger";
      return res.redirect("/register");
    }

    await Coin.create(coin);
    message = "Coin added successfully!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const coins = await Coin.findAll({ order: [["id", "ASC"]] });
    const coin = await Coin.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        coins,
        coinPut: coin,
        coinDel: null,
        message,
        type,
      });
    } else {
      res.render("index", {
        coins,
        coinPut: null,
        coinDel: coin,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const coin = req.body;
    await Coin.update(coin, { where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const del = async (req, res) => {
  try {
    await Coin.destroy({ where: { id: req.params.id } });
    message = "currency successfully excluded";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const details = (req, res) => {
  try {
    const coin = Coin.find(Coin => Coin.id == id);
    res.render("/details/", {coin})

  } catch (err) {

  }
}
