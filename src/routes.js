const { Router } = require('express');

const DeveloperController = require('./controllers/developers_controller')

const routes = Router();

routes.post('/devs', DeveloperController.store);

module.exports = routes;