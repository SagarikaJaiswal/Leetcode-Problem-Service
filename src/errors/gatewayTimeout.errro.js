const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class GatewayTimeout extends BaseError {
  constructor(details) {
    super(
      "Gateway Timeout",
      StatusCodes.GATEWAY_TIMEOUT,
      "The server took too long to respond. Please check your internet connection and try again later.",
      details
    );
  }
}
module.exports = GatewayTimeout;
