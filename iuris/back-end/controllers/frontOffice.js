const Sequelize = require('sequelize');
const frontOfficeModel = require('../models/frontOffice')
const client = require('../models/clients')

const addDocs = async(req,res)=>{
    console.log("executing addDocs")
    await frontOfficeModel.findOne({where: {fileName: req.body.fileName}})
    .then((document)=>{
        console.log(document)
        if(document){
            res.status(400).json({error:"file name already exists"})
        }
        else{
            let {clientId,consultantId,fileName} = req.body
            client.findByPk(clientId)
            .then(clientDetails=>{
            frontOfficeModel.create({
                clientId:clientId,
                consultantId:consultantId,
                fileName:fileName   
            })
            .then((newDocs)=>{
                res.status(200).json({message:`new filename generated for client:${clientDetails.clientName}, fileName: ${newDocs.fileName}`});
            })
        })
        }
    })
    .catch(err=>{
        console.log("front office error: ",err);
    })
}

module.exports = {addDocs};