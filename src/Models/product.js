const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class product extends Model {}

    product.init({
        productId:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncremental: true
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
        supermarketNit:{
            type: DataTypes.STRING,
            allowNull: false
        }
        // Aqui iría el id del supermercado que en este caso seria MCL
    },{
        sequelize: connection,
        modelName: 'product',
        paranoid: true,
        deleteAt: 'destroyTime'
    });
    module.exports = product;