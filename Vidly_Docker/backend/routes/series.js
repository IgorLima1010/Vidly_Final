const express = require("express");
const validateId = require("../middleware/validateId");
const Series = require("../models/series");

const router = express.Router();

router.get("/", async (req, res) => {
  const series = await Series.find().sort("title");
  res.send(series);
});

router.get("/:id", validateId, async (req, res) => {
  const serie = await Series.findById(req.params.id);
  if (!serie) return res.status(404).send();
  res.send(serie);
});

router.post("/", async (req, res) => {
  if (!req.body.title) return res.status(400).send("Title is required.");

  const serie = new Series({ title: req.body.title });
  await serie.save();
  res.status(201).send(serie);
});

router.delete("/:id", async (req, res) => {
  const serie = await Series.findByIdAndDelete(req.params.id);

  if (!serie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.status(204).send();
});

module.exports = router;
