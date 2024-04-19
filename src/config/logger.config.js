const winston = require("winston");
const { LOGS_DB_URL } = require("./server.config");
require("winston-mongodb");
const { combine, timestamp, printf, colorize, errors } = winston.format;

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: combine(
      colorize({ all: true }),
      timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      })
    ),
  })
);
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOGS_DB_URL,
    collection: "logs",
  })
);
allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
    level: "error",
  })
);
const logger = winston.createLogger({
  //default formatting
  format: combine(
    errors({ stack: true }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    printf((info) => {
      const text = `[${info.timestamp}] [${info.level.toUpperCase()}]: ${
        info.message
      }`;
      return info.stack ? text + "\n" + info.stack : text;
    })
  ),
  transports: allowedTransports,
});

module.exports = logger;
