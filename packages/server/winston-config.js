const { createLogger, transports, format } = require('winston');

/**
 * Winston logger formatter
 * @returns formatted log string
 */
const myFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] - [${level}] ${message}`;
});

// Winston logger configuraiton
const logger = createLogger({
  level: 'info',
  exitOnError: false,
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
      maxsize: 1024 * 1024 * 10 // 10MB
    }),
    new transports.File({
      filename: 'logs/combined.log',
      format: format.combine(format.timestamp(), format.json()),
      maxsize: 1024 * 1024 * 10 // 10MB
    }),
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      format: format.combine(
        format.colorize(),
        format.splat(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        myFormat
      )
    })
  ]
});
logger.stream = {
  write: (message) => {
    logger.verbose(message);
  }
};

module.exports = logger;
