const logger = require("../config/logger.config");
const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models/index");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemRespository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    try {
      const problem = await Problem.find({});
      if (!problem) {
        throw new NotFound("Problem", {});
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const deleteProblem = await Problem.findByIdAndDelete(id);
      if (!deleteProblem) {
        throw new NotFound("Problem", id);
      }
      return deleteProblem;
    } catch (error) {
      logger.error(`Problem with the given id: ${id} not found`, error);
      throw error;
    }
  }
  async updateProblem(id, updatedValue) {
    try {
      if (updatedValue.description) {
        updatedValue.description = sanitizeMarkdownContent(
          updatedValue.description
        );
      }
      console.log(updatedValue.description);
      const updatedProblem = await Problem.findByIdAndUpdate(id, updatedValue, {
        returnDocument: "after",
      });
      if (!updatedProblem) {
        throw new NotFound("Problem", id);
      }
      return updatedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRespository;
