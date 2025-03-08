require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const errorHandler = require('./utils/errorHandler.js');



const app = express();


connectDB();



app.use(morgan())
app.use(express.json());




app.use('/api/v1/users', userRoutes);
app.use('/api/v1/users', authRoutes);


app.use(errorHandler);

module.exports = app;