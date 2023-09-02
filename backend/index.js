import express from 'express';
import cors from 'cors';
import conn from './database/database.js';
import authRoutes from './routes/authRoutes.js';
import privateRoutes from './routes/privateRoutes.js';
import * as dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth', authRoutes)
app.use('/api/envios', privateRoutes);

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log(`API Rest is Started in port : ${process.env.PORT}.....`)
    conn();
});


//app.listen(app.get("port"), ()=>{
//    console.log(`Servidor UP corriendo en el puerto ${PORT} `);
//});