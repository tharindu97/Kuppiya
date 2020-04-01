const express = require('express');
const app = express();

//GET Request
app.get('/',(req,res) => {
    return res.json('GET Request');
});

//POST Request
app.post('/',(req,res) => {
    return res.json('POST Request');
});

//PUT Request
app.put('/',(req,res) => {
    return res.json('PUT Request');
});

//DELETE Request
app.delete('/',(req,res) => {
    return res.json('DELETE Request');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server at Stated ${PORT}`);
});