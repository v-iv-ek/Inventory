const Sequelize=require('sequelize');
const user=require('../utils/userdb');

const data=user.define('groceryDetails',{
    id:{
        type:Sequelize.INTEGER,
        allowNUll:false,
        autoIncrement:true,
        primaryKey:true
    },
    ItemName:{
        type:Sequelize.STRING,
        allowNUll:false,
    },
    Description:{
        type:Sequelize.STRING,
        allowNUll:false
    },
    Price:{
        type:Sequelize.STRING,
        allowNUll:false
    },
    Quantity:{
        type:Sequelize.INTEGER,
         allowNUll:false
    }
    

})
module.exports=data