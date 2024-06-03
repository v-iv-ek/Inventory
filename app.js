const express=require('express');
const sequelize=require("./models/usermodel")
const routesHandle=require("./routes/userRoutes");
const bodyParser = require('body-parser');
const cors=require("cors")

const app=express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(routesHandle)


sequelize.sync()
.then((result) => {
    console.log(result)
    app.listen(3000)
}).catch((err) => {
    console.log(err)
    
});


