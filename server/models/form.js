

module.exports= (sequelize, DataTypes)=>{


	const Form =  sequelize.define(
		"form",
		{   
			id:{
				type:DataTypes.INTEGER(11).UNSIGNED,
				allowNull:false,
				autoIncrement:true,
				primaryKey:true,
				field:"id"
			},
			name:{
				type:DataTypes.STRING(20),
				unique:true,
				field:"title"

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
            
			description:{
				type:DataTypes.STRING(300),
				allowNull: true,
				field:"description"
			},  
			questionId:{
				type:DataTypes.ARRAY(DataTypes.INTEGER),
				allowNull:true,
				field:"questionId"
			},
			userId_FK:{
				type:DataTypes.INTEGER(11).UNSIGNED,
				allowNull:false,
				field:"userId_FK"
			}
		},
		{
			tableName:"form"
		}    
	);

	Form.associate = function(models){
		Form.belongsTo(models.user,{
			foreignKey : "userId_FK",
			onDelete : "CASCADE"
		});
	};
	return Form;

};