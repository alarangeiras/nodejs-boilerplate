module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define("User", {
		username: DataTypes.STRING,
		password: DataTypes.STRING
	});

	return user;
}