'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const { FoodModel, ClothesModel } = require('./models');

const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory';

const sequelize = new Sequelize(SQL_CONNECTION_STRING);

module.exports = {
  sequelize,
  FoodModel,
  ClothesModel,
};
