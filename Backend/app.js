const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config();
app.use(cors());




module.exports=app;