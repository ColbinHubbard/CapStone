const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  song: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  album: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
