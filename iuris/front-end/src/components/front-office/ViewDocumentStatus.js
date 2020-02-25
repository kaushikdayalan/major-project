import React, { Component } from 'react'
import AdminMenu from '../core/AdminMenu'
import {FileNameExists} from '../../componentFunctions/FrontOfficeFunctions'
import { getDocuments } from '../../componentFunctions/AdminFunctions'
class ViewDocumentStatus extends Component{
    constructor(){
        super()
        this.state={
            error:"",
            message:"",
            fileName:"",
            available:false,
            documentList:[],
            frontOfficeId:Number
        }
    }
    
  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
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
        getDocuments({frontOfficeId: this.state.frontOfficeId})
        .then(data=>{
            this.setState({documentList:data});
        })
      }
    })
  }

    render(){
        const {error,message,documentList,fileName,available} = this.state
        return(
            <div>
            <AdminMenu/>
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
          <div className="container-fluid" style={{paddingTop:"50px",paddingBottom:"50px"}}>
        <div className="row justify-content-center">
          <div className="col-sm-15"style={{borderTop:"1px solid #d5d6d1",
          borderBottom:"1px solid #d5d6d1",borderLeft:"1px solid #d5d6d1",borderRight:"1px solid #d5d6d1"}}>
                  {
                      documentList.map((documentList,i)=>{
                          return(
                              <div key={i}>
                                  <div className="row justify-content-center" style={{paddingTop:"30px"}}>
                                          <div className="col-sm-3" style={{paddingBottom:"30px"}}>
                                            <label>Document Name:</label>
                                        </div>
                                        <div className="col-sm-3" style={{paddingBottom:"30px"}}>
                                            <input type="text" className="form-control text-center" 
                                            defaultValue={documentList.finalDocument} disabled="true"></input>
                                        </div>
                                        <div className="col-sm-2" style={{paddingBottom:"30px"}}>
                                            <input type="text" className="form-control text-center" 
                                            defaultValue={documentList.DocumentsIn} disabled="true"></input>
                                        </div>
                                        <div className="col-sm-2" style={{paddingBottom:"30px"}}>
                                            <input type="text" className="form-control text-center" 
                                            defaultValue={documentList.DocumentsOut} disabled="true"></input>
                                        </div>
                                  </div>
                              </div>
                          )
                      })
                  }
          </div>
        </div>
        </div>
      </div>
    </div>

</div>
        );
    }
}

export default ViewDocumentStatus;