import mongoose from "mongoose";

// MongoDB connection
const URI = "mongodb://localhost:27017/animesApp";
const DB = mongoose
  .connect(URI)
  .then(() => {
    console.log("Connection started.");
  })
  .catch((err) => {
    console.error("Connection error.");
    console.error(err);
  });

// Schemas - Classes
const animeSchema = new mongoose.Schema({
  title: String,
  start: Number,
  seasons: Number,
  episodes: Number,
  rating: Number,
});
const Anime = mongoose.model("Anime", animeSchema);

// Instances
const shingekiNoKyojin = new Anime({
  title: "Shingeki no kyojin",
  start: 2013,
  seasons: 4,
  episodes: 100,
  rating: 8.55,
});
shingekiNoKyojin.save();
