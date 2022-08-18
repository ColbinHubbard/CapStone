const { Router } = require("express");
const Song = require("../models/Song");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newSong = new Song(request.body);
  newSong.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// Get (read) all records from the collection
router.get("/", (request, response) => {
  Song.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Song.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.delete("/:id", (request, response) => {
  Song.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Song.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        Artist: body.Artist,
        Song: body.Song,
        Album: body.Album
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});
module.exports = router;
