const { Sequelize } = require('sequelize'); 

var dataBase = 'Supermarket'; 
var userName = 'postgres'; 
var password = '2005'; 


const connection = new Sequelize(dataBase, userName, password, { 
    host: 'localhost',
    dialect: 'postgres' 
}); 

module.exports = connection;