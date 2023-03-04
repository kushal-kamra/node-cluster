/* eslint-disable no-undef */
// eslint-disable-next-line max-classes-per-file
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3',
});

class Shorturlmodel extends Sequelize.Model {}
Shorturlmodel.init(
  {
    originalUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Shorturlmodel',
  },
);

module.exports = {
  sequelize,
  Shorturlmodel,
};
