const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const properties = JSON.parse(fs.readFileSync('properties.json', 'utf8'));

app.post('/api/authenticate', (req, res) => {
    const { username, password } = req.body;
    if (username === properties.username && password === properties.password) {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }
});

app.get('/api/data', (req, res) => {
    // Simulate data from Oracle DB
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ]);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
