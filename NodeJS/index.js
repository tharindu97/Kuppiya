const express = require('express');
const app = express();
//Create  Router
const postRequest = require('./routes/Post/postWithParams');
const getRequest = require('./routes/Get/getWithParams');

app.use(postRequest);
app.use(getRequest);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server at Stated ${PORT}`);
});