module.exports = (sequelize, DataTypes) => {
	const Questions = sequelize.define(
		"questions",
		{
			questionId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				field: "questionId"
			},
			questionText: {
				type: DataTypes.STRING(100),
				unique: false,
				allowNull: false,
				field: "questionText"
			}

		},
			{
	    timestamps: false
	},
		{
			tableName: "questions"
		}

	);
	return Questions;
};