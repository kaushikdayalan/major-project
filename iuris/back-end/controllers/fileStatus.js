const Sequelize = require('sequelize');
const fileStatus = require('../models/fileStatus')

const AddFile = async(req,res)=>{
    console.log("executing addFile")
    await fileStatus.findOne({where: {finalDocument: req.body.finalDocument}})
    .then((document)=>{
        console.log(document)
        if(document){
            res.status(400).json({error:"file already exists"})
        }
        else{
            let {finalDocument,frontOfficeId} = req.body
            fileStatus.create({
                finalDocument:finalDocument,
                frontOfficeId:frontOfficeId,
                DocumentsIn:false,
                DocumentsOut:false
            })
        .then((finalDocument)=>{
            res.status(200).json({message:`Document Added: ${finalDocument.finalDocument}`})
        })
        }
    })
    .catch(err=>{
        console.log("File Status Error: ", err)
    })
}


module.exports= {AddFile};