//Application Configuration
const express = require('express');
const app = new express();
const router = require('./src/routes/api');



//Application route

app.use('/api',router);
module.exports=app;