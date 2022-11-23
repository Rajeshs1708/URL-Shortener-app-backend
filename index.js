require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const { db } = require('./connection');


const authRoutes = require('./Routes/auth');
const urlRoutes = require('./Routes/urlShort');

db()
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', urlRoutes);


app.get('/',(req,res)=>{
    res.status(200).send("Welcome to my Application")
})


const PORT = process.env.PORT || 8001 ;
app.listen(PORT,()=>{
    console.log(`App is connected with port ${PORT}`);
})