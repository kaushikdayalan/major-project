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

  addConsultant = consultantName =>{
      return fetch("http://localhost:8080/addc",{
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

  clickSubmit = event =>{
      event.preventDefault();
      this.setState({loading:true})
      const {consultantName} = this.state
      this.addConsultant(consultantName)
      .then((data)=>{
          if(data.error){
              this.setState({error:data.error, loading:false})
          }
          else{
              this.setState({message:data.Message});
          }
      })
      .catch(err=>{
          console.log("Error:",err);
      })

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
                        <input type="text" class="form-control"  value={consultantName} 
                        onChange={this.handleChange("consultantName")} placeholder="consultant name"/>
                    </div>
                    {loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>:""}
                        <div className="alert alert-danger" style={{display: error?"":"none"}}>
                            {error}
                        </div>
                    <button type="submit" class="btn btn-primary" onClick="#">Submit</button>
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