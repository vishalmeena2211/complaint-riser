
const User = require('../models/citizen');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async(req,res)=>{
    try{
        const {firstname
        ,lastname
        ,email
        ,password
        ,gender} = req.body;

        const checkExistance = await User.findOne({email});
        if(checkExistance){
            return res.status(401).json({
                success:false,
                message:"Account already exist with this email adress"
            });
        }


        // otp wala section reh gaya he
            const hashedpassword = await bcrypt.hash(password,10);

        

        const savedData = await User.create({
            firstname
        ,lastname
        ,email
        ,password:hashedpassword
        ,gender
        });
        console.log("Data save succesfully");

        return res.status(200).json({
            success:true,
            message:"data Saved successfully",
            data:savedData

        });

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:`Error while saving data to db ${error.message}`
        });

    }
}


exports.login=async(req,res)=>{
    try{

        const {aadharNo,password} = req.body;

        let isUser = await User.findOne({aadharNo});
        if(!isUser){
            return res.status(401).json({
                success:false,
                message:"No User Exist"
            })
        }
        const checkPassword = await bcrypt.compare(password,isUser.password);
        if(checkPassword){

            const payload = {
                aadharNo:isUser.aadharNo,
                id:isUser._id
            }

            const token = jwt.sign(payload,"vishalmeena",{expiresIn:"2h"});

            isUser = isUser.toObject()
            isUser.token = token;
            isUser.password = undefined;
            console.log("login sucessfully");
            return res.cookie("token",token,{expires:new Date(Date.now()+ 24*60*60*1000),httpOnly:true}).status(200).json({
                success:true,
                message:"login successfull",
                data:isUser
            })
        }else{
            return res.status(401).json({
                success:false,
                message:"Wrong password"
            })
        }

    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:`error when try to log in ${error.message}`
        })

    }
}