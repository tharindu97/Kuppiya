const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = 'mongodb+srv://Thari:Tharindu97@cluster0-ykfr0.azure.mongodb.net/test?retryWrites=true&w=majority';

//Models
require('./models/todos');

//Connect mongodb
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl,
            { 
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
        console.log('Connect mongoDB');
    } catch (error) {
        console.log(error.message);
    }
};

connectDB();

const PORT = process.env.PORT || 5100
app.listen(PORT, () =>{
    console.log(`Server Started at ${PORT}`);
});