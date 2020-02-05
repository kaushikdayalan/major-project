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
    }       
}


module.exports = {addConsultant};
