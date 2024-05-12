const connection = require('./connection.js');

//Models
const cliente = require('../Models/cliente.js');
const factura = require('../Models/factura.js');
const product = require('../Models/product.js');
const supermarket = require('../Models/supermarket.js');
const provider = require('../Models/provider.js');
const administrador = require('../Models/administrador.js');
const department = require('../Models/department.js');
const city = require('../Models/city.js');

//JSON
const departmentjson = require('./jsonFiles/departmentjson.js');
const cityjson = require('./jsonFiles/cityjson.js');


async function sync(){
    
    //Foreing Key supermarket - product
    supermarket.hasMany(product,{
        foreignKey: 'supermarketId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'supermarketId'
    });

    //Foreing Key supermarket - factura
    supermarket.hasMany(factura,{
        foreignKey: 'supermarketId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    factura.belongsTo(supermarket,{
        foreignKey: 'supermarketId'
    });

    //Foreing Key facturas - product
    factura.hasMany(product,{
        foreignKey: 'facturaId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'facturaId'
    });
    department.hasMany(city, {
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });

    city.belongsTo(department, {
        foreignKey: 'departmentId'
    });

    //foreignKey department : city
    city.hasMany(supermarket, {
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });

    supermarket.belongsTo(city, {
        foreignKey : 'cityId'
    });

    /*Foreing Key supermarket - cliente
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

    /*Foreing Key cliente - product
    cliente.hasMany(product,{
        foreignKey: 'clientId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'clientId'
    });

    /*Foreing Key proveedor - product
    provider.hasMany(product,{
        foreignKey: 'providerId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(supermarket,{
        foreignKey: 'providerId'
    });

    //Foreing Key administrador - supermarket
    /*administrador.hasOne(supermarket,{
        foreignKey: 'usuario',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    supermarket.belongsTo(administrador,{
        foreignKey: 'usuario'
    });
    */

    /*Foreing Key administrador - product
    administrador.hasOne(product,{
        foreignKey: 'usuario',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(administrador,{
        foreignKey: 'usuario'
    });
    */

    
    await connection.sync({force: false})
    .then(()=>{
        console.log('Synchronized DataBase');
    })
    .catch((error) =>{
        console.error('Error al sincronizar la base de datos ' + error);
    });

    //Create Json
    departmentjson.createDepartments();
    cityjson.createCities();
    

}

sync();