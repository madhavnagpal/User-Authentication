const Sequelize = require("sequelize");
const db = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/users.db",
});

const Users = db.define("users", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.DataTypes.STRING(30),
    allowNull: false,
  },
  password: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports.db = db;
module.exports.Users = Users;
