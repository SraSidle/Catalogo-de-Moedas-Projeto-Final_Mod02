import sequelize from "sequelize";
import { connection } from "../database/db.js";

export const Coin = connection.define(
  "coin",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    denomination: {
      type: sequelize.STRING,
      allowNull: false,
    },
    picture_front: {
      type: sequelize.STRING,
      allowNull: false,
    },
    picture_back: {
      type: sequelize.STRING,
      allowNull: false,
    },
    topic: {
      type: sequelize.STRING,
      allowNull: false,
    },
    period_: {
      type: sequelize.STRING,
      allowNull: false,
    },
    years: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    composition: {
      type: sequelize.STRING,
      allowNull: false,
    },
    typeboard: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updateAt: false,
  }
);

export const initTable = async () => {
  await Coin.sync();
}

initTable();
