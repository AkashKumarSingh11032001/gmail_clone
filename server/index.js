import express from 'express'
import connection from './database/db.js'


const app = express();
const PORT = 8001;

connection();

app.listen(PORT,(res,req)=>{
    console.log(`Server started at PORT: ${PORT}`)
});