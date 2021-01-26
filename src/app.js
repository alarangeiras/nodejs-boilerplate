const app = require('./config/express');
const logger = require('./config/log');
const PORT = process.env.PORT;


app.listen(PORT, _ => logger.info(`the server is listening on port ${PORT}`));