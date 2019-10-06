const authController = require('../controllers/auth-controller');

module.exports = function (app) {
	app.use('/auth', authController.router);
}