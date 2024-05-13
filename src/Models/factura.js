const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class factura extends Model{}

factura.init({

    facturaId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codeFactura:{
        type: DataTypes.STRING,
        unique: true
    },
    item:{
        type: DataTypes.STRING,
        allowNull: false
    },
    costoTotal:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    impuestos:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'factura',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.exports = factura;