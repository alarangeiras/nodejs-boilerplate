const { Model, DataTypes } = require('sequelize');

class User extends Model { }

User.init({
	username: DataTypes.STRING,
	password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;