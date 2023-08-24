import express, {Request, Response} from 'express'

const app = express();


interface Iproduct{
    id: number;
    name: string;
    price: number;
    description: string;
    address: object;

}

const produts: Iproduct[] = []


app.get('/produtos', (req: Request, res: Response) => {
    const newProduct = {
        id: Math.random(),
        name: "Batedeira",
        price: 300,
        description: 'Batedeira potente, boa para fazer bolos',
        address: {
            street: 'Rua dos Bobos',
            number: 12,
            state: "SP"
        }
    }
    
    produts.push(newProduct)   

  res.json(produts)

})
    
app.listen(3000, () => {
console.log('Servidor rodando na PORT:3000');
});

