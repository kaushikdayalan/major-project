import React,{Component} from 'react'

class AddConsultants extends Component{
    constructor(){
        super()
        this.state={
            consultantName:"",
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
      let {consultantName} = this.state
      const name = {consultantName: consultantName}
      this.addConsultant(name)
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
    addConsultant = consultantName =>{
        return fetch("http://localhost:8080/addConsultant",{
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
                        <h4>Add A consultant</h4>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-5 text-center">
                <form>
    	            <div class="form-group">
        	            <label style={{fontSize:'24px', color:'white'}}>ENTER CONSULTANT NAME</label>
                        <input type="text" class="form-control"  value={consultantName} style={{color:"white"}}
                        onChange={this.handleChange("consultantName")} placeholder="consultant name"/>
                    </div>
                    {loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>:""}
                        <div className="alert alert-danger" style={{display: error?"":"none"}}>
                            {error}
                        </div>
                    <button type="submit" class="btn btn-primary" onClick={this.clickSubmit}>Submit</button>
                </form>
                </div>
                <div className="alert alert-primary" style={{display: message?"":"none"}}>
                    {message}
                </div>
            </div>
        </div>
        );
    }
}

export default AddConsultants;