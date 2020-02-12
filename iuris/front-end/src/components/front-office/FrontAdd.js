import React, { Component } from 'react';
import {isAuthenticated} from '../../componentFunctions/UserFunctions'
class FrontAdd extends Component{
  constructor(){
    super()
    this.state={
      c_id:Number,
      cName:"",
      clientName:"",
      fileNumber:"",
      consultants:[],
      error:"",
      available:false
    }
  }
  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
};

  componentDidMount(){
    
  }
  getClient = event =>{
    event.preventDefault()
    const {cName}=this.state
    const client = {
      clientName: cName
    }
    this.getClientData(client)
    .then(data=>{
      if(data.error){
        this.setState({error:data.error})
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

  getClientData = client =>{
    return fetch("http://localhost:8080/findClient",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(client)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render(){
    const {c_id,cName,clientName,fileNumber,error,available}=this.state
    return(
      <div className="container" style={{paddingTop:"100px"}}>
        <div className="row">
        <div className="col-sm-3">
        <h2 className="mt-5 mb-5">Find Client</h2>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6">
        <div className="alert alert-danger" style={{display: error?"":"none"}}>
          {error}
        </div>
        </div>
        </div>
        <div className="row">
        <div className="form-group">
        <form>
          <div className="col-sm-20">
          <input className="form-control" type="text" style={{color:"white"}} 
          onChange={this.handleChange("cName")} value={cName}placeholder="eneter client name here"></input>
          </div>
        </form>
        <button onClick={this.getClient} className="btn btn-raised btn-primary">Find</button>
        </div>
        </div>
        <div style={{display:available?"":"none"}}>
        <div className="row">
            <div className="col-sm-4">
              <h2>{c_id}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h2>{clientName}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h2>{fileNumber}</h2>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default FrontAdd;