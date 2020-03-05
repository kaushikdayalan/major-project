const Sequelize = require('sequelize');
const Consultants = require('../models/consultants');

const addConsultant = async (req,res)=>{
    const consultantExists = await Consultants.findOne({
        where :{consultantName: req.body.consultantName}
    }) 
    if(consultantExists){
        res.status(403).json({error: "Consultant already exists"})
    }
    else{
        let { consultantName}= req.body
        await Consultants.create({consultantName})
        .then((consultant)=>{
            res.status(200).json({Message:`Consultant created: ${consultant.consultantName}`});
        })
        .catch((err)=>{
            console.log("clientdb error: ",err);
            res.status(404).json({error:"Serverside error"});
        })
    }       
}

const findConsultant = async (req,res)=>{
    await Consultants.findAll()
    .then((consultants)=>{
        res.status(200).json(consultants)
    })
}

const findConsultantByName = async (req,res)=>{
    await Consultants.findOne({
        where: {
            consultantName:req.body.consultantName
        }
    })
    .then((data)=>{
        if(data){
        res.status(200).json({message:"Consultant Found ",data});
        }
        else{
            res.status(400).json({error:"Consultant does not exist"});
        }
    })
}

const deleteConsultant = async(req,res)=>{
    await Consultants.destroy({
        where: {
            id:req.body.id
        }
    })
    .then(data=>{
        if(data ==1){
            res.status(200).json({message:"Consultant successfully Deleted"});
        }
        if(data ==0){
            res.status(400).json({message:"Consultant not found"});
        }
    })
    .catch(err=>{
        console.log(err);
    })
}
module.exports = {addConsultant,findConsultant,findConsultantByName,deleteConsultant};
