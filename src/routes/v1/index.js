const express = require("express");
const problemRouter = require("./problem.routes");
const v1Router = express.Router();
//if the request comes and route continues with /problems we map it to problemRouter
v1Router.use("/problems", problemRouter);

module.exports = v1Router;
