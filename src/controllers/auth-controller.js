const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const JWT_SALT = process.env.JWT_SALT;

const authRequestValidation = [
	check('username').isEmail(),
	check('password').isLength({ min: 5 })
];

class AuthController {

	constructor() {
		this.router = new Router();
		this.router.post('/', authRequestValidation, this.auth);
	}

	auth(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res
				.status(422)
				.json({
					errors: errors.array()
				});
		}

		const { username, password } = req.body;

		const token = jwt.sign(username, JWT_SALT);

		return res.status(200).json({ token });
	}

}

module.exports = new AuthController();