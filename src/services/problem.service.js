const { markdownSanitizer } = require("../utils");

class ProblemService {
  // we inject the problemRespository property here for less coupling
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // convert the description of problem to cleaned markdown
    problemData.description = markdownSanitizer(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);
    return problem;
  }
  async deleteProblem(id) {
    const problem = await this.problemRepository.deleteProblem(id);
    return problem;
  }
  async updateProblem(id, updatedValue) {
    const updatedProblem = await this.problemRepository.updateProblem(
      id,
      updatedValue
    );
    return updatedProblem;
  }
}

module.exports = ProblemService;
