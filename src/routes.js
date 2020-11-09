const express = require('express');

const FavoriteBooksController = require('./controllers/FavoriteBooksController');

const routes = express.Router();

routes.get('/favoritesBooks', FavoriteBooksController.index);
routes.post('/favoritesBooks', FavoriteBooksController.create);
routes.delete('/favoritesBooks/:id', FavoriteBooksController.delete);

module.exports = routes;