const express = require('express');
const knex = require('knex');
const cors = require('cors');


const db = knex(require('./knexfile').development);
const app = express();
const port = 8080;

app.use(cors());

app.listen(port, () => (console.log(`Server is running on http://localhost:${port}`)));

app.get('/', (req, res) => {
    res.send('Server is up and running!');
})

app.get('/movies', async (req, res) => {
    try {
        const movies = await db.select('*').from('movies');
        res.json(movies);
}   catch (error) {
        console.log('Error fetching movies:', error);
        res.status(500).send('Error fetching movies');
    }
})