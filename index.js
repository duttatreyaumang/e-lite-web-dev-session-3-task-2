const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/number', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'number.html'));
});

app.get('/number/:num', (req, res) => {
    let x = req.params.num
    function oddEven(y){
    if (y % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }};
    res.send(`<h1>The number ${x} is ${oddEven(x)}.</h1>`);
});


app.listen(PORT, () => console.log(`Server Started at ${PORT}.`));