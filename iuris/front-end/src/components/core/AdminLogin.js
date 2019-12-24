import React, {Component} from "react"
import { Card, CardDeck, CardTitle, Row, Col, Container, Input, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import "../../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

class AdminLogin extends Component{
    render(){
        return(
          <div className="right-pad-login">
            <Container>

            <Col sm="4">
              <Row sm="3">

            <CardDeck
            className="text-center justify-content-center"
						style={{ marginLeft: '1 px', float: 'right', width: '100%', height: '100%' }}
            >

              <Card
							className="cards text-center"
							body
							outline
							color="info"
							inverse
							style={{ backgroundColor: '#444', borderColor: '#111' }}
						>

							<CardTitle className="text-primary">
								<h4>ADMIN LOGIN PORTAL</h4>
							</CardTitle>

              <Form>
                <FormGroup>
                  <Input style={{color:'#bbb'}}
                  type="email" placeholder="Enter username"/>
                  <Input style={{color:'#bbb'}}
                  type="password" placeholder="Enter password"/>
                </FormGroup>
              </Form>
              <Button style={{color:'white', marginLeft:'2px'}} onClick="">Signin</Button>
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

export default AdminLogin;