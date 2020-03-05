const Sequelize = require('sequelize');
const fileStatus = require('../models/fileStatus')
const frontOffice = require('../models/frontOffice')


const AddFile = async(req,res)=>{
    await fileStatus.findOne({where: 
        {
            finalDocument: req.body.finalDocument,
            frontOfficeId: req.body.frontOfficeId
        }})   
    .then((document)=>{
        if(document){
            res.status(400).json({error:"file already exists"})
        }
        else{
            let {finalDocument,frontOfficeId} = req.body
            fileStatus.create({
                finalDocument:finalDocument,
                frontOfficeId:frontOfficeId,
                rejected:false,
                approved:false,
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

const getDocs = async (req,res)=>{
    const frontOfficeId = req.body.frontOfficeId
    await fileStatus.findAll({
        where:{frontOfficeId:frontOfficeId}
    })
    .then(data=>{
        if(data.length === 0){
            res.status(400).json({error:"no files exist"});
        }
        else{
            res.status(200).json(data);
        }
    })
}
const getDocsInFalse = async (req,res)=>{
    const frontOfficeId = req.body.frontOfficeId
    await fileStatus.findAll({
        where:{
            frontOfficeId:frontOfficeId,
            DocumentsIn:false,
            approved:false
        }
    })
    .then(data=>{
        if(data.length === 0){
            res.status(400).json({error:"no files to be approved"});
        }
        else{
            res.status(200).json(data);
        }
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
                approved:false,
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

module.exports= {AddFile,getDocs,FileNameExists,addPendingDocs, getDocsInFalse};