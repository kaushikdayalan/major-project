const Sequelize = require('sequelize');
const fileStatus = require('../models/fileStatus')
const frontOffice = require('../models/frontOffice')
const AddFile = async(req,res)=>{
    console.log("executing addFile")
    await fileStatus.findOne({where: 
        {
            finalDocument: req.body.finalDocument,
            frontOfficeId: req.body.frontOfficeId
        }})   
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
    frontOffice.findAll({
        where:{id:frontOfficeId},
        include:[fileStatus]
    })
    .then(data=>{
        res.status(200).json({data:data})
    })
}

const FileNameExists = async (req,res)=>{
    await frontOffice.findOne({
        where: {fileName:req.body.fileName}
    })
    .then(data=>{
        if(data){
            res.status(200).json({message:"filenName exists",data:data});
        }
        else{
            res.status(400).json({error:"fileName does not exist"});
        }
    })
    .catch(err=>{
        res.status(400).console.log({error: err});
    })
}

const addPendingDocs = async (req,res)=>{
    await fileStatus.findOne({where: 
        {
            finalDocument: req.body.finalDocument,
            frontOfficeId: req.body.frontOfficeId
        }})
    .then((document)=>{
        console.log(document)
        if(document){
            if(document.rejected == true){
                res.status(200).json({error:"document rejected can add new file"});
            }
            if(document.rejected == false || document.DocumentsIn == false){
                res.status(200).json({error:"document aproval pending"});
            }
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

module.exports= {AddFile,updateDocs,FileNameExists,addPendingDocs};