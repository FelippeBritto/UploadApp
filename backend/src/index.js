const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:root123@cluster0-gtqsa.mongodb.net/test?retryWrites=true&w=majority',
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);