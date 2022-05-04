import { Coin } from "../models/Coin.js";

export const getAll = async (req, res) => {
  try {
    const coins = await Coin.findAll();
    res.render("index", { coins, coinPut: null, coinDel: null });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const register = (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const add = async (req, res) => {
  try {
    const coin = req.body;

    if (!coin) {
      return res.redirect("/register");
    }

    await Coin.create(coin);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const coins = await Coin.findAll();
    const coin = await Coin.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        coins,
        coinPut: coin,
        coinDel: null,
      });
    } else {
      res.render("index", {
        coins,
        coinPut: null,
        coinDel: coin,
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
