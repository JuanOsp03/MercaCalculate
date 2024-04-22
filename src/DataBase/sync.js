const connection = require('./connection.js');

//Models
//const cliente = require('../Models/cliente.js');
const factura = require('../Models/factura.js');
const product = require('../Models/product.js');
const supermarket = require('../Models/supermarket.js');
//const provider = require('../Models/provider.js');
//const administrador = require('../Models/administrador.js');


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
    
    await connection.sync({force: false})
    .then(()=>{
        console.log('Synchronized DataBase');
    })
    .catch((error) =>{
        console.error('Error al sincronizar la base de datos ' + error);
    });

}

sync();