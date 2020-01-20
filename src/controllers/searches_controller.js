const Developer = require('../models/developer');
const parseStringAsArray = require('../utils/parse_string_as_array');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const developers = await Developer.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinate: [longitude, latitude],
          },
        },
        $maxDistance: 5000,
      },
    });

    return response.json(developers);
  }
};