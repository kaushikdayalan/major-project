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
                rejected:false,
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

const addPendingDocs = async (req,res)=>{
    await fileStatus.findAll({
        where:{
            frontOfficeId:req.body.frontOfficeId,
            finalDocument:req.body.finalDocument
        }})
        .then(data=>{
            if(!data.rejected){
                res.status(400).json({error:"file aproval pending"})
            }
            else if(data.rejected){
                res.status(400).json({error:"file rejected please submit accurate document"});
            }
            else if(data.DocumentsIn){
                res.status(400).json({error:"Document exists and approved"});
            }
            else{
                const docs = req.body;
                fileStatus.create(docs)
                .then(finalDocument=>{
                    res.status(200).json({message:`Document Added: ${finalDocument.finalDocument}`})
            })
        }
    })
}

module.exports= {AddFile, updateDocs,addPendingDocs};