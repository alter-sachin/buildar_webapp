module.exports = (sequelize, DataTypes) => {
	const Chatbot = sequelize.define(
		"chatbot",
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				field: "id"
			},
			
			name: {
				type: DataTypes.STRING(20),
				unique: true,
				allowNull: true,
				field: "name"
			},
			email:{
				type:DataTypes.STRING(200),
				unique:true,
				allowNull:true,
				field:"email"
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
			tableName: "chatbot"
		}

	);
	return Chatbot;
};