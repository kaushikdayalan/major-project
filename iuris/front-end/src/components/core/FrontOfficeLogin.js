import React, {Component} from "react"
import { Card, CardDeck, CardTitle, Row, Col, Container, Input, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import "../../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import { signin, authenticate } from "../../componentFunctions/UserFunctions";


class FrontOfficeLogin extends Component{
  constructor(){
    super()
    this.state={
      userName:"",
      password:"",
      error:"",
      redirectTorefer:false,
      loading:false 
    }
  }

  handleChange = name=>event=>{
    this.setState({[name]: event.target.value}); 
    this.setState({error:""});
  };

  clickSubmit = event =>{
    event.preventDefault()
    this.setState({loading:true})
    const{userName,password} = this.state
    const user = {
      userName:userName,
      password:password
    };
    console.log(user)
    signin(user)
    .then(data =>{
      if(data.error) this.setState({error: data.error,loading:false});
      else{
        authenticate(data,()=>{
          this.setState({redirectTorefer:true})
        })
      }
    })
  }

    
    render(){
      const {userName,password,error,loading,redirectTorefer} = this.setState
      const {userName, password, error, redirectTorefer, loading} = this.state
      if (redirectTorefer){
        return <Redirect to="/frontoffice-home"></Redirect>
      }
        return(
          <div className="right-pad-login">
            <Container>
            <Col sm="4">
              <Row sm="3">
            <CardDeck
            className="text-center justify-content-center"
						style={{ marginLeft: '1 px', float: 'right', width: '100%', height: '100%' }}>
              <Card className="cards text-center"body
							outline color="info" inverse
							style={{ backgroundColor: '#444', borderColor: '#111' }}>
							<CardTitle className="text-primary">
								<h4>FRONT OFFICE LOGIN </h4>
							</CardTitle>
              <Form>
                <FormGroup>
                  <Input style={{color:'#bbb'}}
                  type="text" onChange={this.handleChange("userName")} value={userName} placeholder="Enter username"/>
                  <Input style={{color:'#bbb'}}
                  type="password" onChange={this.handleChange("password")} value={password} placeholder="Enter password"/>
                </FormGroup>
              </Form>
              {loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>:""}
              <div className="alert alert-danger" style={{display: error?"":"none"}}>
                    {error}
                </div>
              <Button style={{color:'white', marginLeft:'2px'}} onClick={clickSubmit}>Signin</Button>
              <Link 
									className="btn btn-lg btn-info "
									style={{ marginLeft: '5px', backgroundcolor: '#888888', top: '9px' }}
									to = "/"
								>back</Link>
						</Card>
            </CardDeck>
            </Row>
            </Col>
            </Container>
          </div>
        )
    }
};

export default FrontOfficeLogin;