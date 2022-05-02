import {Coin} from '../models/Coin';

const getAll = async (req , res) => {
    try{
        const coins = await Coin.findAll()
        res.render("index" , {coins})
    } catch (err) {
        res.status(500).send({err: err.message})
    }
};

module.exports = {
    getAll
};