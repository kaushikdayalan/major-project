const Sequelize = require('sequelize');
const fileStatus = require('../models/fileStatus')
const frontOffice = require('../models/frontOffice')
const UpdateRejected = async(req,res)=>{
    console.log("executing addFile")
    const fileDocument = await fileStatus.findOne({where: {
            finalDocument: req.body.finalDocument,
            frontOfficeId: req.body.frontOfficeId
        }})
        console.log(fileDocument);
        if(fileDocument){
        fileDocument.rejected = true;
        fileDocument.updatedAt = Date.now();
        fileDocument.save()
        .then(data=>{
            res.status(200).json({data:data});
        })
    }
    else{
        res.status(400).json("fuck");
    }
}

const UpdateDocumentIn = async(req,res)=>{
    console.log("executing addFile")
    const fileDocument = await fileStatus.findOne({where: {
            finalDocument: req.body.finalDocument,
            frontOfficeId: req.body.frontOfficeId
        }})
        console.log(fileDocument);
        if(fileDocument){
        fileDocument.DocumentsIn = true;
        fileDocument.DocumentsOut = false;
        fileDocument.updatedAt = Date.now();
        fileDocument.save()
        .then(data=>{
            res.status(200).json({data:data});
        })
    }
    else{
        res.status(400).json("Error");
    }
}

const UpdateDocumentOut = async(req,res)=>{
    console.log("executing addFile")
    const fileDocument = await fileStatus.findOne({where: {
            finalDocument: req.body.finalDocument,
            frontOfficeId: req.body.frontOfficeId
        }})
        console.log(fileDocument);
        if(fileDocument){
        fileDocument.DocumentsIn = false;
        fileDocument.DocumentsOut = true;
        fileDocument.updatedAt = Date.now();
        fileDocument.save()
        .then(data=>{
            res.status(200).json({data:data});
        })
    }
    else{
        res.status(400).json("Error");
    }
}

module.exports={UpdateRejected,UpdateDocumentIn,UpdateDocumentOut};