import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class DeleteConsultants extends Component{
    constructor(){
        super()
        this.state={
            consultantName:"",
            ConsultantId:Number,
            error:"",
            loading:false,
            message:""
        }
    }
    
  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
  };


  deleteConsultantfunc = event =>{
      event.preventDefault();
      let {consultantId} = this.state
      const c_id = {id: consultantId}
      this.deleteConsultant(c_id)
      .then((data)=>{
          if(data.error){
              this.setState({error:data.error, loading:false})
          }
          else{
              this.setState({message:data.message,loading:false,consultantName:""});
          }
      })
      .catch(err=>{
          console.log("Error:",err);
      })

    }
    deleteConsultant = consultantId =>{
        return fetch("http://localhost:8080/deleteConsultant",{
          method:"DELETE",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          body: JSON.stringify(consultantId)
      })
      .then(response =>{
          return response.json()
      })
      .catch(err => console.log(err))
    }

    findConsultantByName = event=>{
        event.preventDefault();
        this.setState({loading:true});
        let {consultantName}= this.state;
        const c_name = {consultantName: consultantName};
        this.findConsultant(c_name)
        .then(data=>{
            if(data.error){
                this.setState({loading:false,error:data.error});
            }
            else{
                this.setState({message:data.message,consultantId:data.data.id,loading:false});
            }
        })

    }
    
    findConsultant = consultantName =>{
        return fetch("http://localhost:8080/findConsultantByName",{
          method:"POST",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          body: JSON.stringify(consultantName)
      })
      .then(response =>{
          return response.json()
      })
      .catch(err => console.log(err))
    }
  

    render(){
        const {consultantName,loading,error,message} = this.state
        return(
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="text-center">
                        <h4>Delete Consultant</h4>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-5 text-center">
                <form>
    	            <div class="form-group">
                        <label style={{fontSize:'24px'}}>ENTER CONSULTANT NAME</label>
                        <input type="text" class="form-control"  value={consultantName}
                        onChange={this.handleChange("consultantName")} placeholder="consultant name"/>
                    </div>
                    {loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>:""}
                        <div className="alert alert-danger" style={{display: error?"":"none"}}>
                            {error}
                        </div>
                    <button type="submit" className="btn btn-raised btn-primary" style={{margin:"10px"}} 
                    onClick={this.findConsultantByName}>Submit</button>
                    <Link className="btn btn-raised btn-primary" to="/adminHome" style={{margin:"10px"}} >back</Link>
                    </form>
                </div>
            </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-6 text-center">
                <div style={{display: message?"":"none"}}>
                <div className="alert alert-primary">{message}</div> 
                <button className="btn btn-raised btn-primary" onClick={this.deleteConsultantfunc}>Delete</button>
                </div>
                </div>
                </div>
        </div>
        );
    }
}

export default DeleteConsultants;