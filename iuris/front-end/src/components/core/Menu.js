import React from "react"
import {Link,withRouter} from "react-router-dom"
import {isActive,isAuthenticated,signout} from "../auth/index"

const Menu = ({history})=>(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <label className="navbar-brand"><b>Iuris</b></label>
  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/" style={isActive(history,"/")}>Home</Link>
      </li>

      {isAuthenticated() &&(
      <>
      <li className="nav-item">
      <Link className="nav-link" to="">{isAuthenticated().user.username}</Link>
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

export default withRouter(Menu);