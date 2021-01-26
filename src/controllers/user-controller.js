const Router = require('express').Router;
const { check, validationResult } = require('express-validator');
const userService = require('../services/user-service');

const authRequestValidation = [
	check('username').isEmail(),
	check('password').isLength({ min: 5 })
];

const routes = new Router();
routes.post('/', authRequestValidation, add);

function add(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	const { username, password } = req.body;
	userService.add({ username, password });
}

exports.router = routes;