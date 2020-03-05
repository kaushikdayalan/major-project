const Sequelize = require('sequelize');
const fileStatus = require('../models/fileStatus')
const frontOffice = require('../models/frontOffice')
const UpdateRejected = async(req,res)=>{
    const fileDocument = await fileStatus.findOne({where:
         {
            id:req.body.id,
            frontOfficeId: req.body.frontOfficeId
        }})
        console.log(fileDocument);
        if(fileDocument){
        fileDocument.rejected = true;
        fileDocument.updatedAt = Date.now();
        fileDocument.save()
        .then(data=>{
            res.status(200).json({message:"successfully updated please refresh page",data:data});
        })
    }
    else{
        res.status(400).json({error:"error try again"});
    }
}

const UpdateDocumentIn = async(req,res)=>{
    const fileDocument = await fileStatus.findOne({where: 
        {
            id:req.body.id,
            frontOfficeId: req.body.frontOfficeId
        }})
        console.log(fileDocument);
        if(fileDocument){
        fileDocument.DocumentsIn = true;
        fileDocument.DocumentsOut = false;
        fileDocument.updatedAt = Date.now();
        fileDocument.save()
        .then(data=>{
            res.status(200).json({message:"successfully updated please refresh page",data:data});
        })
    }
    else{
        res.status(400).json({error:"error try again"});
    }
}

const UpdateDocumentOut = async(req,res)=>{
    const fileDocument = await fileStatus.findOne({where:
        {
            id:req.body.id,
            frontOfficeId: req.body.frontOfficeId
        }})
        console.log(fileDocument);
        if(fileDocument){
        fileDocument.DocumentsIn = false;
        fileDocument.DocumentsOut = true;
        fileDocument.updatedAt = Date.now();
        fileDocument.save()
        .then(data=>{
            res.status(200).json({message:"successfully updated please refresh page",data:data});
        })
    }
    else{
        res.status(400).json({error:"error try again"});
    }
}

const deleteDoc = async(req,res)=>{
    await fileStatus.destroy({
        where: {
            id:req.body.id
        }
    })
    .then(data=>{
        if(data ==1){
            res.status(200).json({message:"successfully rejected"});
        }
        if(data ==0){
            res.status(400).json({message:"no record found"});
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports={UpdateRejected,UpdateDocumentIn,UpdateDocumentOut, deleteDoc};