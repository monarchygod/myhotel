//esm package to ensure we can use import instead of require
require('dotenv').config();
import express from 'express';
import {readdirSync} from 'fs'
const app = express();

//route middleware
readdirSync('./routes').map((r)=>app.use('/api', require(`./routes/${r}`))); //autoloading of all the routes in the routes folder

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${8000}`));