const connection = require('./connection.js');

//Models
const cliente = require('../Models/cliente.js');
const factura = require('../Models/factura.js');
const product = require('../Models/product.js');
const supermarket = require('../Models/supermarket.js');
const provider = require('../Models/provider.js');
const administrador = require('../Models/administrador.js');


async function sync(){
    
    //Foreing Key supermarket - product
    supermarket.hasMany(product,{
        foreignKey: 'supermarketNit',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'supermarketNit'
    });

    //Foreing Key supermarket - factura
    supermarket.hasMany(factura,{
        foreignKey: 'supermarketNit',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    factura.belongsTo(supermarket,{
        foreignKey: 'supermarketNit'
    });

    //Foreing Key facturas - product
    factura.hasMany(product,{
        foreignKey: 'codeFactura',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'codeFactura'
    });

    //Foreing Key supermarket - cliente
    supermarket.hasMany(cliente,{
        foreignKey: 'supermarketNit',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    cliente.belongsTo(supermarket,{
        foreignKey: 'supermarketNit'
    });

    //Foreing Key cliente - factura
    cliente.hasMany(factura,{
        foreignKey: 'clientId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    factura.belongsTo(supermarket,{
        foreignKey: 'clientId'
    });

    //Foreing Key cliente - product
    cliente.hasMany(product,{
        foreignKey: 'clientId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'clientId'
    });

    //Foreing Key proveedor - product
    provider.hasMany(product,{
        foreignKey: 'providerId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'providerId'
    });

    //Foreing Key administrador - supermarket
    administrador.hasOne(supermarket,{
        foreignKey: 'usuario',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    supermarket.belongsTo(administrador,{
        foreignKey: 'usuario'
    });

    //Foreing Key administrador - product
    administrador.hasOne(product,{
        foreignKey: 'usuario',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(administrador,{
        foreignKey: 'usuario'
    });

    
    await connection.sync({force: false})
    .then(()=>{
        console.log('Synchronized DataBase');
    })
    .catch((error) =>{
        console.error('Error al sincronizar la base de datos ' + error);
    });

}

sync();