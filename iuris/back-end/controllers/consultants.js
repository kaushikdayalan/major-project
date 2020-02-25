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


module.exports = {addConsultant,findConsultant};
