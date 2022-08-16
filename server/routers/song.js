const { Router } = require("express");
const Search = require("../models/Song");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newSearch = new Search(request.body);
  newSearch.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// Get (read) all records from the collection
router.get("/", (request, response) => {
  Search.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Search.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.delete("/:id", (request, response) => {
  Search.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Search.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        crust: body.crust,
        cheese: body.cheese,
        sauce: body.sauce,
        toppings: body.toppings
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
