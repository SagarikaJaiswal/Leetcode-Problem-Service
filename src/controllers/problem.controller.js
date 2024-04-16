const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const problemService = new ProblemService(new ProblemRepository());
function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up" });
}
async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created the new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

async function getProblems(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

async function deleteProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

async function updateProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
