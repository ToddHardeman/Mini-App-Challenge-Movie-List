const express = require('express');
const knex = require('knex');
const cors = require('cors');


const db = knex(require('./knexfile').development);
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

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

app.post('/movies', async (req, res) => {
    try {
        const { title, cover, watched } = req.body;
        const [id] = await db('movies').insert({ title, cover, watched }).returning('id');
        const newMovie = { id, title, cover, watched }; 
        res.status(201).json(newMovie); 
    } catch (error) {
        console.log('Error adding movie:', error);
        res.status(500).json({ error: 'Error adding movie' });
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db('movies').where({ id }).del();
        res.status(200).send('Movie deleted successfully');

    } catch (error) {
        console.log('Error deleting movie:', error);
        res.status(500).send('Error deleting movie');
    }
});