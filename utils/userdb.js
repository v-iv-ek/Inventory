const Sequelize=require('sequelize');
const sequelize=new Sequelize('nodejsproject','root','0820',{
    dialect:'mysql',
    host:'localhost'
})

const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  testConnection(); 
module.exports=sequelize