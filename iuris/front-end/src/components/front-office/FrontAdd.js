import React, { Component } from 'react';
import {list, getClientData} from '../../componentFunctions/FrontOfficeFunctions'
class FrontAdd extends Component{
  constructor(){
    super()
    this.state={
      c_id:Number,
      cName:"",
      clientName:"",
      fileNumber:"",
      consultantName:"",
      fileName:"",
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

  render(){
    const {c_id,cName,clientName,fileNumber,consultants,error,available}=this.state
    return(
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
          onChange={this.handleChange("cName")} value={cName}placeholder="eneter client name here"></input>
          </div>
          </div>
        </form>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <button onClick={this.getClient} className="btn btn-raised btn-primary">Find</button>
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
                <h2 className="mt-5 mb-5 text-center">Add documents below</h2>
                <div className="form-group">
                <label>Client ID:</label>
                <input type="text" className="form-control" defaultValue={c_id}></input>
              </div>
              <div className="form-group">
                <label>Client Name:</label>
                <input type="text" className="form-control" defaultValue={clientName}></input>
              </div>
              <div className="form-group">
                <label>File Number:</label>
                <input type="text" className="form-control" defaultValue={fileNumber}></input>
              </div>
              <div className="form-group">
                  <label>Select consultant</label>
                    {  
                    <select className="form-control" onChange={this.handleChange("consultantName")}>{
                      consultants.map((consultant,i)=>{
                        return  <option key={i} className="form-control">{consultant.consultantName}</option>
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
            <div className="col-sm-20">
              <button className="btn btn-raised btn-primary">save</button>
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