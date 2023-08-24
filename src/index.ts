import express from 'express'

const app = express();

let produtos: number;

 
app.get('/produtos', (req, res) => {
    res.send('Meus Produtos')
}).listen(3000, () => {
    console.log('Servidor rodando na PORT:3000');
});

