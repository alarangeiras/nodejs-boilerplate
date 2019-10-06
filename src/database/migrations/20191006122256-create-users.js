'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.queryTable('users', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.dropTable('users');
	}
};
