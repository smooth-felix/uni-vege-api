const express = require('express');
const mongoose = require('mongoose');
const app = express();
const databaseConfig = require('./config/database');

const PORT = process.env.PORT || 5000;

//Database Connection
mongoose.connect(databaseConfig.database, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{console.log('Connected to the Database...')})
        .catch((error)=>{
            console.log(error);
        })
//Server
app.listen(PORT, function() {
    console.log(`server running at ` + PORT);
});



module.exports = app;