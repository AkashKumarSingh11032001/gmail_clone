import express from 'express'
import connection from './database/db.js'
import routes from './routes/route.js';


const app = express();
const PORT = 8001;

app.use('/', routes);

connection();

app.listen(PORT,(res,req)=>{
    console.log(`Server started at PORT: ${PORT}`)
});