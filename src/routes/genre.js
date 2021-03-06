const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre');

router.get('/', genreController.allGenre);
router.get('/:genreType', genreController.singleGenre);

module.exports = router;
