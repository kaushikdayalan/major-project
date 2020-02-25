import React from "react"
import {Link,withRouter} from "react-router-dom"
import {isActive,isAuthenticated,signout} from "../../componentFunctions/UserFunctions"

const FrontOfficeMenu = ({history})=>(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <label className="navbar-brand"><b>Iuris</b></label>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav">
      {!isAuthenticated() && (
      <>
      <li className="nav-item">
        <Link className="nav-link" to="/" style={isActive(history,"/")}>Home</Link>
      </li>
      </>)}
      {isAuthenticated() &&(
      <>
      <li className="nav-item">
        <Link className="nav-link" to="/frontoffice-home" style={isActive(history,"/")}>Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link">{isAuthenticated().user.userName}</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to=""style={(isActive(history,"/Signout"))} onClick={()=> signout(()=> history.push("/"))}>
          Signout</Link>
      </li>
      </>
      )} 
    </ul>
  </div>
</nav>
);

export default withRouter(FrontOfficeMenu);