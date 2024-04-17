const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("../src/config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//if the request comes and route starts with /api we map it to apiRouter
app.use("/api", apiRouter);
app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is up" });
});

app.use(errorHandler);
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to DB");
});
