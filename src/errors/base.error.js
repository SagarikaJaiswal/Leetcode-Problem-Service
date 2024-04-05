class BaseError extends Error {
  constructor(name, statusCode, desription, details) {
    super(desription);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
  }
}

module.exports = BaseError;
