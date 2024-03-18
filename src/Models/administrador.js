const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class administrador extends Model {}

administrador.init({
  usuario: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'administrador',
  paranoid: true,
  deletedAt: 'destroyTime'
});

module.exports = administrador;