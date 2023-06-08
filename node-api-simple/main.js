const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' },
    { id: 3, name: 'Produto 3' },
];

// Rota para obter todos os produtos
app.get('/products', (request, response) => {
    // Aqui você pode implementar a lógica para buscar os produtos no banco de dados ou qualquer outra fonte de dados
    response.json(products);
});

// Rota para criar um novo produto
app.post('/products', (request, response) => {
    const { id, name } = request.body;

    // Aqui você pode implementar a lógica para criar um novo produto no banco de dados ou qualquer outra fonte de dados
    const newProduct = { id, name };

    products.push(newProduct)

    response.json(newProduct);
});

// Rota para alterar um novo produto
app.put('/products/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const { name } = request.body;

    const product = products.find(p => p.id === id);

    product.name = name;

    response.json(product);
});

app.delete('/products/:id', (request, response) => {
    const { id } = request.params;

    products = products.filter(p => p.id !== parseInt(id));

    response.json(true);
});

// // Rota para alterar um novo produto
// app.delete('/products/:id', (request, response) => {
//     const id = parseInt(request.params.id);

//     const product = products.find(p => p.id === id);

//     products.delete(product);

//     response.send("Registro deletado.");
// });




app.listen(port, () => {
    console.log(`Serviço de produtos iniciado na porta ${port}`);
});
