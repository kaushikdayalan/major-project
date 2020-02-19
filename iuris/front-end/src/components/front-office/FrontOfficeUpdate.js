import React, { Component } from 'react';
import {FileNameExists,frontOfficeAddPendingDocument} from '../../componentFunctions/FrontOfficeFunctions'
class FrontOfficeUpdate extends Component{
  constructor(){
    super()
    this.state={
      fileNumber:"",
      fileName:"",
      error:"",
      finalDocsError:"",
      message:"",
      finalDocsMessage:"",
      frontOfficeId:Number,
      finalDocument:"",
      available:false
    }
  }
  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
    this.setState({finalDocsError:"",finalDocsMessage:""});
};

  doesFileExist = event =>{
    event.preventDefault()
    const {fileName}=this.state
    const file = {
      fileName: fileName
    }
    FileNameExists(file)
    .then(data=>{
      if(data.error){
        this.setState({error:data.error,available:false})
      }
      else{
        console.log(data)
        this.setState({
          frontOfficeId:data.data.id,
          message:data.message,
          available:true
        })
      }
    })
  }


  addNewFinalDocument = event =>{
    event.preventDefault()
    const {finalDocument, frontOfficeId}=this.state
    const document = {
      finalDocument:finalDocument,
      frontOfficeId:frontOfficeId
    }
    frontOfficeAddPendingDocument(document)
    .then(data=>{
      if(data.error){
        this.setState({finalDocsError:data.error})
      }
      else{
        this.setState({finalDocsMessage:data.message,finalDocument:""})
      }
    })
    .catch(err=>{
      console.log("documents error: ",err)
    })
  }

  render(){
    const {error,available,message,finalDocsMessage,finalDocsError,finalDocument,fileName}=this.state
    return(
      <div className="container" style={{paddingTop:"70px"}}>
        <div className="row">
        <div className="col-sm-4">
        <h2 className="mt-5 mb-5">Search fileName</h2>
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
        <div className="col-sm-3 text-center">
        <div className="alert alert-success" style={{display: message?"":"none"}}>
          {message}
        </div>
        </div>
        </div>    
        <div className="row">
        <form>
        <div className="col-sm-20">
        <div className="form-group">
          <input className="form-control" type="text" style={{width:"300px"}}
          onChange={this.handleChange("fileName")} value={fileName}placeholder="enter file name here"></input>
          </div>
          </div>
        </form>
        </div>
        <div className="row">
          <div className="col-sm-5">  
            <button onClick={this.doesFileExist} className="btn btn-raised btn-primary">Find</button>
          </div>
        </div>
        <div style={{display:available?"":"none"}}>
          <div className="container" style={{paddingTop:"50px",paddingBottom:"50px"}}>
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
              <div className="alert alert-danger" style={{display: finalDocsError?"":"none"}}>
                {finalDocsError}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-20" style={{paddingBottom:"30px"}}>
              <div className="alert alert-success" style={{display: finalDocsMessage?"":"none"}}>
                {finalDocsMessage}
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

export default FrontOfficeUpdate;