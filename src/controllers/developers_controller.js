const axios = require('axios');

const Developer = require('../models/developer');

module.exports = {
  async index(request, response) {
    const developers = await Developer.find();

    return response.json(developers);
  },

  async create(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let developer = await Developer.findOne({ github_username });

    if (!developer) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = techs.split(',').map(tech => tech.trim());

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      developer = await Developer.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location,
      });
    }

    return response.json(developer);
  }
};
