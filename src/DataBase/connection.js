const { Sequelize } = require('sequelize'); 

var dataBase = 'supermarket'; 
var userName = 'postgres'; 
var password = '2020'; 


const connection = new Sequelize(dataBase, userName, password, { 
    host: 'localhost',
    dialect: 'postgres' 
}); 

module.exports = connection;