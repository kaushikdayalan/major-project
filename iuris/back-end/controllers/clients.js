const clients = require('../models/clients');

const addClient = async (req,res)=>{
    const clientExists = await clients.findOne({
        where :{clientName: req.body.clientName}
    }) 
    if(clientExists){
        res.status(403).json({error: "client already exists"})
    }
    else{
        let {clientName, fileNumber}= req.body
        await clients.create({clientName, fileNumber})
        .then((clients)=>{
            res.status(200).json({Message:`client created: ${clients.clientName}`});
        })
        .catch((err)=>{
            console.log("clientdb error: ",err);
            res.status(404).json({error:"Serverside error"});
        })
    }       
}

const findClient =(req,res)=> {
    clients.findOne({
        where:{clientName: req.body.clientName}
    })
    .then((client=>{
        res.status(200).json(client.dataValues)  
    }))
    .catch((err)=>{
        console.log(err)
        res.status(400).json({error:"client does not exist"});
    })   
}



module.exports = {addClient,findClient};
