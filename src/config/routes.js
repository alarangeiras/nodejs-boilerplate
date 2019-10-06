const authController = require('../controllers/auth-controller');
const userController = require('../controllers/user-controller');

module.exports = function (app) {
	app.use('/auth', authController.router);
	app.use('/user', userController.router);
}