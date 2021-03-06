const winston = require('winston');
const expressWinston = require('express-winston');

const colorize = process.env.NODE_ENV !== 'production';

// Logger to capture all requests and output them to the console.
// [START requests]
const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: false,
      colorize,
    }),
  ],
  expressFormat: true,
  meta: false,
  colorize: true,
});
// [END requests]

// Logger to capture any top-level errors and output json diagnostic info.
// [START errors]
const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize,
    }),
  ],
});
// [END errors]

module.exports = {
  requestLogger,
  errorLogger,
  error: winston.error,
  warn: winston.warn,
  info: winston.info,
  log: winston.log,
  verbose: winston.verbose,
  debug: winston.debug,
  silly: winston.silly,
};
