const Sequelize = require('sequelize');
const database = require('../database/index');

const Usuario = database.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  })

module.exports = Usuario;