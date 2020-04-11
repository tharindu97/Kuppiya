import express from "express";
import connectDB from './config/db';
//Model
import './model/User';


//Routes
import Auth from './routes/auth/auth.routes';

const app = express();
app.use(express.json({ extends: true }));

const PORT = process.env.PORT || 5003;

//Database Connection
connectDB();

app.use('/api/auth',Auth);

app.listen(PORT, () =>{
    console.log(`Server Strat ${PORT}`);
});