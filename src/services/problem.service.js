const { markdownSanitizer } = require("../utils");

class ProblemService {
  // we inject the problemRespository property here for less coupling
  constructor(problemRespository) {
    this.problemRespository = problemRespository;
  }

  async createProblem(problemData) {
    try {
      // convert the description of problem to cleaned markdown
      problemData.description = markdownSanitizer(problemData.description);

      const problem = await this.problemRespository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
