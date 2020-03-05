const Sequelize = require('sequelize');
const frontOfficeModel = require('../models/frontOffice')

const addDocs = async(req,res)=>{
    await frontOfficeModel.findOne({where: {fileName: req.body.fileName}})
    .then((document)=>{
        if(document){
            res.status(400).json({error:"file name already exists"})
        }
        else{
            let {fileNo,consultantId,fileName} = req.body
            frontOfficeModel.create({
                fileNo:fileNo,
                consultantId:consultantId,
                fileName:fileName   
            })
            .then((newDocs)=>{
                res.status(200).json({message:`new fileName created: ${newDocs.fileName}`,newDocs});
            })
        }
    })
    .catch(err=>{
        console.log("front office error: ",err);
    })
}



module.exports = {addDocs};