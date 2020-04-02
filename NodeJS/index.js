const express = require('express');
const app = express();
//Create  Router
//const postRequest = require('./routes/Post/postWithParams');
//const getRequest = require('./routes/Get/getWithParams');
//const postWithBody = require('./routes/Post/postWithBody');
const todoList = require('./routes/todoList/todoList');


//Midilwera
app.use(express.json());

//app.use(postRequest);
//app.use(getRequest);
//app.use(postWithBody);
app.use(todoList);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server at Stated ${PORT}`);
});