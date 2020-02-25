import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import FrontOfficeMenu from '../core/FrontOfficeMenu'
class AddClient extends Component{
    constructor(){
        super()
        this.state={
            clientName:"",
            fileNumber:"",
            error:"",
            loading:false,
            message:""
        }
    }
    
  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
  };


  clickSubmit = event =>{
      event.preventDefault();
      this.setState({loading:true})
      let {clientName, fileNumber} = this.state
      const client = {clientName:clientName, fileNumber:fileNumber}
      this.addConsultant(client)
      .then((data)=>{
          if(data.error){
              this.setState({error:data.error, loading:false})
          }
          else{
              this.setState({message:data.Message,loading:false});
          }
      })
      .catch(err=>{
          console.log("Error:",err);
      })

    }
    addConsultant = client =>{
        return fetch("http://localhost:8080/addClient",{
          method:"POST",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          body: JSON.stringify(client)
      })
      .then(response =>{
          return response.json()
      })
      .catch(err => console.log(err))
    }
  

    render(){
        const {clientName,fileNumber,loading,error,message} = this.state
        return(
            <div><FrontOfficeMenu/>
            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="text-center">
                        <h4>Add a Client</h4>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-5 text-center">
                <form>
    	            <div class="form-group">
        	            <label style={{fontSize:'24px'}}>ENTER CLIENT NAME</label>
                        <input type="text" class="form-control"  value={clientName}
                        onChange={this.handleChange("clientName")} placeholder="client name"/>
                    </div>
    	            <div class="form-group">
        	            <label style={{fontSize:'24px'}}>ENTER FILE NUMBER</label>
                        <input type="text" class="form-control"  value={fileNumber}
                        onChange={this.handleChange("fileNumber")} placeholder="file number"/>
                    </div>
                    {loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>:""}
                        <div className="alert alert-danger" style={{display: error?"":"none"}}>
                            {error}
                        </div>
                    <button type="submit" className="btn btn-raised btn-primary" style={{margin:"10px"}} onClick={this.clickSubmit}>Submit</button>
                    <Link className="btn btn-raised btn-primary" to="/frontoffice-home" style={{margin:"10px"}}>back</Link>
                </form>
                </div>
                <div className="alert alert-primary" style={{display: message?"":"none"}}>
                    {message}
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default AddClient;