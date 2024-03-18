require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require('express');
const app = express();
const port  = process.env.PORT || 1337;

//routers
const clienteroiuter = require('./Routers/clienterouter.js');
const facturarouter = require('./Routers/facturarouter.js');
const productrouter = require('./Routers/productrouter.js');
const supermarketrouter = require('./Routers/supermarketrouter.js');



app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.listen(port, ()=>{
    console.log("The application is running on port "+ port);
})

//api
app.use('/api', clienteroiuter);
app.use('/api', facturarouter);
app.use('/api', productrouter);
app.use('/api', supermarketrouter);