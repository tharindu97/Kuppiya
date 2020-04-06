const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://Thari:Tharindu97@cluster0-ykfr0.azure.mongodb.net/test?retryWrites=true&w=majority';

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

module.exports = connectDB;