const express=require('express');
const router=express.Router();
const userRoutes=require("../Controllers/userController")

router.get("/item",userRoutes.getItemData)
router.post("/item",userRoutes.postItemData)
router.patch("/item/:id",userRoutes.patchItemData);


module.exports=router;