const mongoose = require("mongoose");

const dbUrl =  "mongodb://db/vidly";

const moviesDB =  mongoose.createConnection(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  
console.log("Connected to MongoDB: " + dbUrl);

const close = () => moviesDB.close();

module.exports = { moviesDB, close, url: dbUrl };
