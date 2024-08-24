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
