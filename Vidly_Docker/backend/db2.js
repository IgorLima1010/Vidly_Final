const mongoose = require("mongoose");

const dbUrl =  "mongodb://db2/vidly2";

const seriesDB =  mongoose.createConnection(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  
console.log("Connected to MongoDB: " + dbUrl);
const close = () => seriesDB.close();

module.exports = { seriesDB, close, url: dbUrl };
