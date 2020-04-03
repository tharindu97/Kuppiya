const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = 'mongodb+srv://Thari:Tharindu97@cluster0-ykfr0.azure.mongodb.net/test?retryWrites=true&w=majority';


const connectDb = async () =>{
    try {
        await mongoose.connect(mongoUrl,
            { 
                useUnifiedTopology: true,
                useNewUrlParser: true 
            });
        console.log('Mongodb Connected');
    } catch (error) {
        console.log(err.message);
    }
}

connectDb();

const PORT = process.env.PORT || 5100;
app.listen(PORT, ()=> {
    console.log(`Server Strated at port ${PORT}`);
});