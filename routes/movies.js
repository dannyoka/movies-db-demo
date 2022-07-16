const { Router } = require('express');
const db = require('../db');
const router = Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM movies', (err, result) => {
    if (err) {
      console.error(err);
      res.send(err);
    }
    res.json(result);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM movies WHERE id = ?', id, (err, result) => {
    if (err) {
      console.error(err);
      res.send(err);
    }
    res.json(result);
  });
});

router.post('/movies', (req, res) => {
  const { movie_name: movieName } = req.body;
  db.query(
    'INSERT INTO movies (movie_name) VALUES (?)',
    movieName,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(`Successfully added ${movieName}`);
    }
  );
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { movie_name: movieName } = req.body;
  db.query(
    'UPDATE movies SET movie_name = ? WHERE id = ?',
    [movieName, id],
    (err, result) => {
      if (err) res.send(err);
      res.send('Movie updated successfully');
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM movies WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send('Movie deleted successfully');
  });
});

module.exports = router;
