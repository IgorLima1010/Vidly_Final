const express = require("express");
const Movie = require("../models/movies");
const Serie = require("../models/series");

const router = express.Router();

router.get("/:title", async (req, res) => {
  const {title} = req.params;
  const movie = await Movie.findOne({title: title});
  const serie = await Serie.findOne({title: title});

  res.send({
    movie,
    serie
  });
});


module.exports = router;