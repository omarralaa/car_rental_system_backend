const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');

const Account = sequelize.define('account', {
  // Model attributes are defined here
  account_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Account;