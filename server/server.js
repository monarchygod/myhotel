//esm package to ensure we can use import instead of require
require('dotenv').config();
import express from 'express';
import {readdirSync} from 'fs'
import cors from 'cors';
import mongoose from 'mongoose';
const morgan = require('morgan');
const app = express();

//database connection

mongoose
    .connect(process.env.DATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch((error) => console.log('DB connection error', error.message));

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//route middleware
readdirSync('./routes').map((r)=>app.use('/api', require(`./routes/${r}`))); //autoloading of all the routes in the routes folder

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${8000}`));