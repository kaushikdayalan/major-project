import React, {Component} from "react"
import {Link} from 'react-router-dom'
import FrontOfficeMenu from '../core/FrontOfficeMenu'
class FrontHome extends Component{
	render(){
		return(
			<div><FrontOfficeMenu/>
			<div className="container">     
				<div className="jumbotron row justify-content-md-center"style={{paddingTop:"60px"}}>
					<div className="col-sm-4">
						<h3 className="text-center"style={{fontFamily:"san-serif",color:"black"}}>LawyerPoint front office</h3>
					</div>
				</div>
				<div className="container"style={{borderTop:"2px solid #d5d6d1",
          borderBottom:"2px solid #d5d6d1",borderLeft:"2px solid #d5d6d1",borderRight:"2px solid #d5d6d1"}}>
				<div className="row justify-content-md-center" style={{paddingTop:"60px",paddingBottom:"60px"}}>
					<div className="col-sm-auto">
						<Link className="btn btn-raised btn-primary" to="/frontoffice-add"
						style={{paddingTop:"15px",paddingBottom:"15px"}}>Create a new document list</Link>
					</div>					
					<div className="col-sm-auto">
						<Link className="btn btn-raised btn-primary" to="/frontOfficeUpdate"
						style={{paddingTop:"15px",paddingBottom:"15px"}}>Add new documents to existing list</Link>
					</div>
					<div className="col-sm-auto">
						<Link className="btn btn-raised btn-primary" to="/addClient"
						style={{paddingTop:"15px",paddingLeft:"65px",paddingRight:"65px",paddingBottom:"15px"}}>Add new client</Link>
					</div>
				</div>
				<div className="row justify-content-center" style={{paddingBottom:"30px"}}>
					<div className="col-sm-auto">
						<Link className="btn btn-raised btn-primary" to="/viewDocuments"
						style={{paddingTop:"15px",paddingLeft:"65px",paddingRight:"65px",paddingBottom:"15px"}}>View document status</Link>
					</div>
					</div>
			</div>
			</div>
			</div>
		);
	}
}

export default FrontHome;