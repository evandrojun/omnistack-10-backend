const { Router } = require('express');

const DeveloperController = require('./controllers/developers_controller')

const routes = Router();

routes.get('/devs', DeveloperController.index);
routes.post('/devs', DeveloperController.create);

module.exports = routes;