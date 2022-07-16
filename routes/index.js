const { Router } = require('express');
const moviesRouter = require('./movies');

const router = Router();

router.use('/movies', moviesRouter);

module.exports = router;
