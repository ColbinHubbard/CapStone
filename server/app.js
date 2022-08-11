const express = require("express");
const app = express();
// Request handlers go here
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});
app.listen(4040, () => console.log("Listening on port 4040"));
