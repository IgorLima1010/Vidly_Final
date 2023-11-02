const mongoose = require("mongoose")
const {moviesDB} = require("../db");

const Movies = moviesDB.model('Movies', new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }
}));


module.exports = Movies; 