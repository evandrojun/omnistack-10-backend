const { Router } = require('express');

const DevelopersController = require('./controllers/developers_controller')
const SearchesController = require('./controllers/searches_controller');

const routes = Router();

routes.get('/devs', DevelopersController.index);
routes.post('/devs', DevelopersController.create);

routes.get('/search', SearchesController.index);

module.exports = routes;