import React, {Component} from "react"
import {Link} from 'react-router-dom'

class FrontHome extends Component{
	render(){
		return(
			<div className="container">
				<div className="jumbotron row justify-content-md-center"style={{paddingTop:"60px"}}>
					<div className="col-sm-4">
						<h3 className="text-center"style={{fontFamily:"san-serif",color:"black"}}>LawyerPoint front office</h3>
					</div>
				</div>
				<div className="container">
				<div className="row justify-content-md-center" style={{paddingTop:"60px"}}>
					<div className="col-sm-4">
						<Link className="btn btn-raised btn-primary" to="/frontoffice-add"
						style={{paddingTop:"15px",paddingBottom:"15px"}}>Create a new document list</Link>
					</div>					
					<div className="col-sm-4">
						<Link className="btn btn-raised btn-primary"
						style={{paddingTop:"15px",paddingBottom:"15px"}}>Add new documents to existing list</Link>
					</div>
				</div>				
				<div className="row justify-content-md-center" style={{paddingTop:"60px"}}>
					<div className="col-sm-4">
						<Link className="btn btn-raised btn-primary" to="/addClient"
						style={{paddingTop:"15px",paddingLeft:"65px",paddingRight:"65px",paddingBottom:"15px"}}>Add new client</Link>
					</div>					
					<div className="col-sm-4">
						<Link className="btn btn-raised btn-primary" to="/addConsultant"
						style={{paddingLeft:"70px",paddingRight:"70px",paddingBottom:"15px",paddingTop:"15px"}}>
							Add new consultant</Link>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default FrontHome;