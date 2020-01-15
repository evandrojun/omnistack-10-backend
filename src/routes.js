const { Router } = require('express');
const axios = require('axios');
const Developer = require('./models/developer');

const routes = Router();

routes.post('/devs', async (request, response) => {
  const { github_username, techs } = request.body;

  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

  const { name = login, avatar_url, bio } = apiResponse.data;

  const techsArray = techs.split(',').map(tech => tech.trim());

  const newDeveloper = await Developer.create({
    name,
    github_username,
    bio,
    avatar_url,
    techs: techsArray,
  });

  return response.json(newDeveloper);
});

module.exports = routes;