const { User } = require('../models');

function add(user) {
	User.create(user);
}

module.exports = {
	add
};