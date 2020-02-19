const Sequelize = require('sequelize');
const frontOfficeModel = require('../models/frontOffice')
const client = require('../models/clients')
const fileStatus = require('../models/fileStatus')

const addDocs = async(req,res)=>{
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
                res.status(200).json({message:`new filename generated for client: ${clientDetails.clientName}, fileName: ${newDocs.fileName}`});
            })
        })
        }
    })
    .catch(err=>{
        console.log("front office error: ",err);
    })
}

const updateDocs = async (req,res)=>{
    const frontOfficeId = req.body.frontOfficeId
    frontOfficeModel.findAll({
        where:{id:frontOfficeId},
        include:[fileStatus]
    })
    .then(data=>{
        res.status(200).json({data:data})
    })
}

module.exports = {addDocs,updateDocs};