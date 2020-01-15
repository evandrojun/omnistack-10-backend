const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  name: String,
  github_name: String,
  bio: String,
  avatar_url: String,
  techs: [String],
});

module.exports = mongoose.model('Developer', DevSchema);