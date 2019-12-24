import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Card, CardDeck, CardTitle, Row, Col, CardImg} from 'reactstrap'
import "../../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"

const UserSelect = ()=>(
    <div>
        <Jumbotron fluid align="center">

                <h1 className="display-3">IURIS -by SKKAR</h1>
                <p className="lead">Easy file location/status details</p>
            
        </Jumbotron>
        <div className="right-pad">
        <Row sm="1">
				<Col sm="3">
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
						style={{ backgroundColor: '#444', borderColor: '#111' }}
						>
        				<CardImg top width="100%" src={require("../../assets/adminImage.png")} alt="Card image cap"/>
        				
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
        				<CardImg top width="100%" src={require("../../assets/frontOffice.png")} alt="Card image cap" />
        				
          					<CardTitle>Front office Login</CardTitle>
							  <Link 
									className="btn btn-lg btn-info "
									style={{ marginLeft: '5px', backgroundcolor: '#888888' }}
									to = "/admin"
								>Click here</Link>
      				</Card>
					</CardDeck>
				</Col>
			</Row>
        </div>
    </div>
);

export default UserSelect;