const mongoose = require("mongoose")
const {seriesDB} = require("../db2");

const Series = seriesDB.model('Series', new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }
}));

module.exports = Series; 