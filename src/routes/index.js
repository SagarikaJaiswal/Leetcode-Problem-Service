const express = require("express");
const v1Router = require("./v1/index");
const apiRouter = express.Router();

//if the request comes and route continues with /v1 we map it to v1Router
apiRouter.use("/v1", v1Router);
module.exports = apiRouter;
