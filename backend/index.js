const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

// GET endpoint to fetch all clients
app.get('/clientes', (req, res) => {
    fs.readFile('clientes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading clientes.json');
            return;
        }

        const clients = JSON.parse(data);
        res.json(clients);
    });
});

// POST endpoint to create a new client
app.post('/clientes', (req, res) => {
    
    const datosNuevoCliente = req.body;

    fs.readFile('clientes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading clientes.json');
            return;
        }

        const clientes = JSON.parse(data);
        clientes.push(datosNuevoCliente);

        fs.writeFile('clientes.json', JSON.stringify(clientes, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing clientes.json');
                return;
            }
            res.send('Cliente created successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
