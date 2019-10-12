const Router = require('express').Router;
const jwt = require('jsonwebtoken');

const JWT_SALT = process.env.JWT_SALT;

class AuthController {

	constructor() {
		this.router = new Router();
		this.router.get('/', this.auth);
	}

	auth(req, res) {
		res.json({
			message: 'hello world'
		});
	}

}

module.exports = new AuthController();