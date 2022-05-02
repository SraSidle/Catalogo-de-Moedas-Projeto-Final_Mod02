import Sequelize from 'sequelize';

const connection  = new Sequelize(
    process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 5434,
        dialect: "postgres"
    }
);

module.exports = connection;