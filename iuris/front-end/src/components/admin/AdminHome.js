import React, {Component} from "react"
import {Link} from 'react-router-dom'

class AdminHome extends Component{
	render(){
		return(
			<div className="container">
				<div className="jumbotron row justify-content-md-center"style={{paddingTop:"60px"}}>
					<div className="col-sm-4">
						<h3 className="text-center"style={{fontFamily:"san-serif",color:"black"}}>LawyerPoint Administrators</h3>
					</div>    
				</div>
				<div className="container"style={{borderTop:"2px solid #d5d6d1",
          borderBottom:"2px solid #d5d6d1",borderLeft:"2px solid #d5d6d1",borderRight:"2px solid #d5d6d1"}}>
				<div className="row justify-content-md-center" style={{paddingTop:"60px",paddingBottom:"60px"}}>
					<div className="col-sm-auto">
						<Link className="btn btn-raised btn-primary" to="/frontoffice-add"
						style={{paddingTop:"15px",paddingBottom:"15px"}}>New documents approval</Link>
					</div>					
					<div className="col-sm-auto">
						<Link className="btn btn-raised btn-primary"
						style={{paddingTop:"15px",paddingBottom:"15px"}}>Update document status of clients</Link>
					</div>				
					<div className="col-sm-auto">
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

export default AdminHome;