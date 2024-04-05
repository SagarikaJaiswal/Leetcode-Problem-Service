const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Inavalid input for ${propertyName} provided`,
      details
    );
  }
}
module.exports = BadRequest;
