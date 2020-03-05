import React, { Component } from 'react';
import { list, getClientData, frontOfficeDetails, frontOfficeAddDocument } from '../../componentFunctions/FrontOfficeFunctions'
import FrontOfficeMenu from '../core/FrontOfficeMenu'
import {Link} from 'react-router-dom'
class FrontAdd extends Component{
  constructor(){
    super()
    this.state={
      c_id:Number,
      cName:"",
      clientName:"",
      fileNumber:"",
      consultantId:Number,
      fileName:"",
      consultants:[],
      error:"",
      docsError:"",
      finalDocsError:"",
      message:"",
      messageDocs:"",
      frontOfficeId:Number,
      finalDocument:"",
      available:false,
      uploadSuccess:false
    }
  }
  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
};

  componentDidMount(){
    list().then(data=>{
      if(data.error){
          console.log(data.error)
      }
      else{
          console.log(data)
          this.setState({consultants:data})
      }
    })
  }

  getClient = event =>{
    event.preventDefault()
    const {cName}=this.state
    const client = {
      clientName: cName
    }
    getClientData(client)
    .then(data=>{
      if(data.error){
        this.setState({error:data.error,available:false})
      }
      else{
        console.log(data)
        this.setState({
          c_id:data.id,
          clientName:data.clientName,
          fileNumber:data.fileNumber,
          available:true
        })
      }
    })
  }
  addFrontOfficeData = event =>{
    event.preventDefault()
    const {c_id, consultantId, fileName}=this.state
    const docData = {
      clientId: c_id,
      consultantId: consultantId,
      fileName:fileName
    }
    frontOfficeDetails(docData)
    .then(data=>{
      if(data.error){
        this.setState({docsError:data.error})
      }
      else{
        this.setState({message:data.message,uploadSuccess:true,frontOfficeId:data.newDocs.id})
      }
    })
    .catch(err=>{
      console.log("documents error: ",err)
    })
  }
  addNewFinalDocument = event =>{
    event.preventDefault()
    const {finalDocument, frontOfficeId}=this.state
    const document = {
      finalDocument:finalDocument,
      frontOfficeId:frontOfficeId
    }
    frontOfficeAddDocument(document)
    .then(data=>{
      if(data.error){
        this.setState({finalDocsError:data.error})
      }
      else{
        this.setState({messageDocs:data.message,finalDocument:""})
      }
    })
    .catch(err=>{
      console.log("documents error: ",err)
    })
  }

  render(){
    const {c_id,cName,clientName,fileNumber,consultants,error,available,messageDocs,finalDocument,message,uploadSuccess}=this.state
    return(
      <div>
        <FrontOfficeMenu/>
      <div className="container" style={{paddingTop:"70px"}}>
        <div className="row">
        <div className="col-sm-2">
        <h2 className="mt-5 mb-5">Find Client</h2>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-3 text-center">
        <div className="alert alert-danger" style={{display: error?"":"none"}}>
          {error}
        </div>
        </div>
        </div>
        <div className="row">
        <form>
        <div className="col-sm-20">
        <div className="form-group">
          <input className="form-control" type="text" 
          onChange={this.handleChange("cName")} value={cName}placeholder="enter client name here"></input>
          </div>
          </div>
        </form>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <button onClick={this.getClient} className="btn btn-raised btn-primary" style={{margin:"10px"}}>Find</button>
            <Link className="btn btn-raised btn-primary" to="/frontoffice-home" style={{margin:"10px"}}>back</Link>
          </div>
          
        </div>
        <div style={{display:available?"":"none"}}>
          <div className="container" style={{paddingTop:"50px",paddingBottom:"50px"}}>
          <div className="row justify-content-center">
          <div className="col-sm-10" style={{borderTop:"1px solid #d5d6d1",
          borderBottom:"1px solid #d5d6d1",borderLeft:"1px solid #d5d6d1",borderRight:"1px solid #d5d6d1"}}>
            <form>
              <div className="row justify-content-center">
              <div className="col-sm-7">
                <h2 className="mt-5 mb-5 text-center">Add information about documents</h2>
                <div className="form-group">
                <label>Client ID:</label>
                <input type="text" className="form-control" defaultValue={c_id} disabled="true"></input>
              </div>
              <div className="form-group">
                <label>Client Name:</label>
                <input type="text" className="form-control" defaultValue={clientName} disabled="true"></input>
              </div>
              <div className="form-group">
                <label>File Number:</label>
                <input type="text" className="form-control" defaultValue={fileNumber} disabled="true"></input>
              </div>
              <div className="form-group">
                  <label>Select consultant</label>
                    {  
                    <select className="form-control" onChange={this.handleChange("consultantId")}>{
                      consultants.map((consultant,i)=>{
                        return  <option key={i} value={consultant.id} className="form-control">{consultant.consultantName}</option>
                      })
                    }
                    </select>
                    }       
              </div>
              <div className="form-group">
                <label>File name:</label>
                <input type="text" className="form-control" onChange={this.handleChange("fileName")}></input>
              </div>
              </div>
              </div>
            </form>
          <div className="row justify-content-center">
            <div className="col-sm-20" style={{paddingBottom:"30px"}}>
              <button className="btn btn-raised btn-primary" onClick={this.addFrontOfficeData}>save</button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-20" style={{paddingBottom:"30px"}}>
              <div className="alert alert-success" style={{display: message?"":"none"}}>
                {message}
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div style={{display:uploadSuccess?"":"none",paddingTop:"40px"}}>
        <div className="row justify-content-center">
          <div className="col-sm-10"style={{borderTop:"1px solid #d5d6d1",
          borderBottom:"1px solid #d5d6d1",borderLeft:"1px solid #d5d6d1",borderRight:"1px solid #d5d6d1"}}>
            <form>
            <div className="row justify-content-center">
              <div className="col-sm-7">
                <h2 className="mt-5 mb-5 text-center">Add final documents</h2>
                <div className="form-group">
                <input type="text" className="form-control" 
                value={finalDocument} onChange={this.handleChange("finalDocument")}></input>
              </div>
              </div>
              </div>
            </form>
            <div className="row justify-content-center">
            <div className="col-sm-20" style={{paddingBottom:"30px"}}>
              <button className="btn btn-raised btn-primary"onClick={this.addNewFinalDocument}>Add document</button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-20" style={{paddingBottom:"30px"}}>
              <div className="alert alert-success" style={{display: messageDocs?"":"none"}}>
                {messageDocs}
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default FrontAdd;