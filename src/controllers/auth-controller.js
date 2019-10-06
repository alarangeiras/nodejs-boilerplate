const Router = require('express').Router;
const jwt = require('jsonwebtoken');

const JWT_SALT = process.env.JWT_SALT;

class AuthController {

	constructor() {
		this.router = new Router();
		this.router.post('/', this.auth);
	}

	auth(req, res) {

	}

}

module.exports = new AuthController();