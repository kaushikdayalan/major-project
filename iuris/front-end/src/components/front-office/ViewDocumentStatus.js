import React, {Component} from 'react'

class ViewDocumentStatus extends Component{
    constructor(){
        super()
        this.state={
            fileName:"",
            file_statuses:[],
            error:"",   
            message:""
        }
    }

    handleChange = name=>event=>{
        this.setState({[name]: event.target.value}); 
        this.setState({error:"",message:""});
    };
    
    render(){
        const {fileName,error,message} = this.state
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
            <button  className="btn btn-raised btn-primary">Find</button>
          </div>
        </div>
    </div>
        );
    }
}

export default ViewDocumentStatus;