require('./DataBase/sync.js');

const express = require('express');
const app = express();
const cors = require('cors');
const port  = process.env.PORT || 1337;

//routers
const clienteroiuter = require('./Routers/clienterouter.js');
const facturarouter = require('./Routers/facturarouter.js');
const productrouter = require('./Routers/productrouter.js');
const supermarketrouter = require('./Routers/supermarketrouter.js');
const providerrouter = require('./Routers/providerrouter.js');
const administradorrouter = require('./Routers/administradorrouter.js');
const departmentrouter = require('./Routers/departmentrouter.js');
const cityrouter = require('./Routers/cityrouter.js');



app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.listen(port, ()=>{
    console.log("The application is running on port "+ port);
})

//api
app.use('/api', clienteroiuter);
app.use('/api', facturarouter);
app.use('/api', productrouter);
app.use('/api', supermarketrouter);
app.use('/api', providerrouter);
app.use('/api', administradorrouter);
app.use('/api', departmentrouter);
app.use('/api', cityrouter);