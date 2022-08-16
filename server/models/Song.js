const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  Artist: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  Song: {
    type: String,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  Album: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
