// import Coin from '../models/Coin';
const Coin = require("../models/Coin");

const getAll = async (req , res) => {
    try{
        const coins = await Coin.findAll()
        res.render("index" , {coins, coin: undefined })
    } catch (err) {
        res.status(500).send({err: err.message})
    }
};

module.exports = {
    getAll
};