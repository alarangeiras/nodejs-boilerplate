const winston = require('winston');

const customFormat = winston.format.printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.label({label: 'nodejs-boilerplate'}),
		customFormat			
	),
	transports: [
		new winston.transports.Console()
	]
});

module.exports = logger;