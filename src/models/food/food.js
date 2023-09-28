// const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define('Food', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Food;
  };
  