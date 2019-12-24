import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Container,  Card, CardDeck, CardTitle, Row, Col, CardImg} from 'reactstrap'
import "../../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"

const UserSelect = ()=>(
    <div>
        <Jumbotron fluid align="center">
            <Container fluid>
                <h1 className="display-3">IURIS -by SKKAR</h1>
                <p className="lead">Easy file location/status details</p>
            </Container>
        </Jumbotron>
        <div className="right-pad">
        <Row sm="4">
				<Col sm="4">
					<CardDeck
						className="text-center justify-content-center"
						style={{ marginLeft: '1 px', float: 'left', width: '200%', height: 'auto' }}
					>
					<Card
						className="cards text-center"
						body
						outline
						color="info"
						inverse
						style={{ backgroundColor: 'black', borderColor: '#111' }}
						>
        				<CardImg top width="100%" src={require("../../assets/adminImage.png")} alt="Card image cap" />
        				
          					<CardTitle>Admin Login	</CardTitle>
							  <Link 
									className="btn btn-lg btn-info "
									style={{ marginLeft: '5px', backgroundcolor: '#888888' }}
									to = "/admin"
								>Click here</Link>
      				</Card>
						<Card
							className="cards text-center"
							body
							outline
							color="info"
							inverse
							style={{ backgroundColor: '#444', borderColor: '#111' }}
						>
							<CardTitle className="text-danger">
								<h4>Login as front office</h4>
							</CardTitle>
							<div className="parentElement">
								<button
									className="btn btn-lg btn-info "
									style={{
										marginLeft: '5px',
										color: 'black',
										textAlign: 'left',
										top: '10px',
										left: '5px'
									}}
								>
									Click here
								</button>
							</div>
						</Card>
					</CardDeck>
				</Col>
			</Row>
        </div>
    </div>
);

export default UserSelect;