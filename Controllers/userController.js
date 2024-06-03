const sequelize = require("../models/usermodel");
exports.postItemData = async (req, res, next) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const price = req.body.price;
    const qty = req.body.qty;

    if (!name || !desc || !price || !qty) {
        throw new Error("All Input Fields Mandatory");
    }
    console.log(req.body);
    const data = await sequelize.create({
      ItemName: name,
      Description: desc,
      Price: price,
      Quantity: qty,
    });

    res.status(201).json({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.getItemData=async (req,res,next)=>{
    try{
      const getData=await sequelize.findAll()
      res.status(200).json(getData);
    }
    catch(err){
        console.log(err)
    }

}
exports.putItemData=async (req,res,next)=>{
    try{
        const id=req.params.id
      const getData=await sequelize.findByPk(id)
      console.log(getData.dataValues)
      res.status(200).json(getData.dataValues);
    }
    catch(err){
        console.log(err)
    }

}