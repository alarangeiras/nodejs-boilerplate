const { User } = require('../models');

class UserService {

	add(user) {
		User.create(user);
	}

}

module.exports = new UserService();