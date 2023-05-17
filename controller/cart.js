
require("../mongoose/config")

const cart = require("../model/cart")

exports.addCartItems  = async( req,res)=>{
    const userId = req.params.userId
    console.log(req.body)
    try {
        if(userId){
            const data = new cart({userId:userId,cartItems:req.body})
            const dataSave = await data.save()
            res.status(200).json({staus:true,message:"success",dataSave});
        }else{
            res.status(404).send({staus:false,message:"failed"})
        }
    } catch (err) {
        res.status(404).send({staus:false,message:"failed",err})
    }
}

exports.getCartItems  = async( req,res)=>{
    const userId = req.params.userId
    try {
        if(userId){
            const data = await cart.findOne({userId:userId})
            res.status(200).json({staus:true,message:"success",data});
        }else{
            res.status(404).send({staus:false,message:"failed"})
        }
    } catch (err) {
        res.status(404).send({staus:false,message:"failed",err})
    }
}

exports.putCartItems  = async( req,res)=>{
    const userId = req.params.userId
    try {
        if(userId){
            const data = await cart.updateOne({userId:userId}, {$set:{cartItems:req.body}},{upsert:true})
            res.status(200).json({staus:true,message:"success",data});
        }else{
            res.status(404).send({staus:false,message:"failed"})
        }
    } catch (err) {
        res.status(404).send({staus:false,message:"failed",err})
    }
}