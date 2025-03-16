import 'dotenv/config';
import express from 'express';
import { connectDb } from './src/config/db.config.js';
import { productRouter } from './src/routes/product.routes.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/product',productRouter);

connectDb();

app.get("/",(req,res)=>{
    res.send("server started")
})



app.listen( PORT ,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})

