const express = require('express');
const app = express();

app.get('/produto', (req, res) => {
    res.send('Meus Produtos')
}).listen(3000, () => {
    console.log('Servidor rodando na PORT:3000');
});

