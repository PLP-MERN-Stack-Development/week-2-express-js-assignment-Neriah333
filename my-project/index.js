const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Hello World");
} );

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/contact', (req, res) => {
  res.send('Contact Page');
});

app.get('/products/:id', (req, res) => {
  res.send(`Products Id: ${req.params.id}`);
});

// Task 2
let products = [
  {
    id: 1,
    name: "phone",
    description: "HD camera",
    price: 2000,
    category: "electronics",
    inStock: true
  },
  {
    id: 2,
    name: "laptop",
    description: "Lightweight and powerful",
    price: 5000,
    category: "electronics",
    inStock: true
  },
  {
    id: 3,
    name: "headphones",
    description: "Noise-cancelling wireless headphones",
    price: 800,
    category: "accessories",
    inStock: false
  }
];

// List all products
app.get('/products', (req, res) => {
  res.json(products);
});


app.listen(PORT, ()=> {
  console.log('Server is running on http://localhost:3000');
});

