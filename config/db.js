const { Sequelize } = require("sequelize");

// SQLite Database setup
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

module.exports = { sequelize };
