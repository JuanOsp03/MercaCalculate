const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class cliente extends Model{}

cliente.init({
    clientId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique : true
    },
    clientLastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    clientFirstName:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'cliente',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.exports = cliente;