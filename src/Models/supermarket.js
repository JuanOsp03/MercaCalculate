//...
const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class supermarket extends Model{}

supermarket.init({
    supermarketName:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },
    supermarketAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    comercialRegistry:{
        type: DataTypes.STRING,
        allowNull: false
    },
    supermarketNit:{
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    cityId:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'supermarket',
    paranoid: true,
    deleteAt: 'destroyTime'
})

module.exports = supermarket;