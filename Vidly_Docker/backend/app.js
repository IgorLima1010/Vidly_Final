const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const movieRoutes = require("./routes/movies");
const seriesRoutes = require("./routes/series");
const dois_bancosRoutes = require("./routes/nosdois");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", homeRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/series", seriesRoutes);
app.use("/api/nosdois", dois_bancosRoutes);

module.exports = app;
