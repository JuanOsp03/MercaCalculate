//...
const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class supermarket extends Model{}

supermarket.init({
    supermarketId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    supermarketName:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
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