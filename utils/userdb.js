const Sequelize=require('sequelize');
const sequelize=new Sequelize('nodejsproject','root','0820',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize