const express = require('express');
const bParser = require('body-parser');
const dotenv = require('dotenv');

//Initialize needed configs for server
const app = express();
dotenv.config();

app.get('/',(req,res,next)=>{

        res.send('hello world!');
});

app.listen(process.env.PORT);