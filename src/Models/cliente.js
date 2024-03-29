const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class cliente extends Model{}

cliente.init({
    clientId:{
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    clientName:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'client',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.exports = cliente;