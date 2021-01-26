const Router = require('express').Router;

const routes = new Router();
routes.get('/', auth);

function auth(req, res) {
	res.json({
		message: 'hello world'
	});
}

exports.router = routes;