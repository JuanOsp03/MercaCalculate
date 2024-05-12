const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class product extends Model {}

    product.init({
        productId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
            unique: true
        },
        productName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productDescription:{
            type: DataTypes.STRING,
            allowNull:false
        },
        productPrice:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        productBrand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productCategory:{
            type: DataTypes.STRING,
            allowNull: false
        },
        supermarketId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize: connection,
        modelName: 'product',
        paranoid: true,
        deleteAt: 'destroyTime'
    });
    module.exports = product;