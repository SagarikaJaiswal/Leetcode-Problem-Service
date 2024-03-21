const express = require("express");
const { PORT } = require("../src/config/server.config");
const app = express();

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is up" });
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
