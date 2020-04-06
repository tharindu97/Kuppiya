const express = require('express');
const app = express();
const connectDB = require('./config/db');
//Models
require('./models/todos');
//Http Request
const getTodos = require('./routes/todos/GetTodos');
const getTodo = require('./routes/todos/GetTodo');



app.use(getTodo);

//Connect mongodb
connectDB();

const PORT = process.env.PORT || 5100
app.listen(PORT, () =>{
    console.log(`Server Started at ${PORT}`);
});













//Add data
//const Todos = mongoose.model('todos');

/*const addData = async () => {
    try {
        const todo = new Todos({
            title:'Nodejs',
            description:'Learn Nodejs'
        });
        await todo.save();
        console.log('Data Saved');
    } catch (error) {
        console.log(error.message);
    }
};
addData();*/
/*
//Get Data
const getData = async () => {
    try {
        const todo = await Todos.find();
        console.log(todo);
    } catch (error) {
        console.log(error.message);
    }
};
getData();
*/
/*
//Deleted data
(async () =>{
    try {
        await Todos.findByIdAndDelete('');
        console.log('Deleted Id');
    } catch (error) {
        console.log(error.message);
    }
})();*/
/*
//update data
const updateData = async () => {
    try {
        await Todos.updateOne(
            {_id:'id'},
            { $set: { title:'update title', description:'update description' }}
        );
    } catch (error) {
        console.log(error.message);
    }
};

updateData();
*/