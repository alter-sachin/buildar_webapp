module.exports = (sequelize, DataTypes) => {
	const Actor = sequelize.define(
		"actor",
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				field: "id"
			},
			actorId: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: "actorId"
			},
			name: {
				type: DataTypes.STRING(20),
				unique: true,
				allowNull: true,
				field: "name"
			},
			thumbnail: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: "thumbnail"
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "createdAt"
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "updatedAt"
			},


		},
		{
			tableName: "actor"
		}

	);
	return Actor;
};