import React from "react"
import {Route, Switch} from 'react-router-dom'
import UserSelect from './components/core/UserSelect'
import AdminLogin from './components/core/AdminLogin'
import FrontOfficeLogin from './components/core/FrontOfficeLogin'
import FrontHome from './components/front-office/FrontHome'
import FrontAdd from './components/front-office/FrontAdd'
import FrontUpdate from './components/front-office/FrontUpdate'
import AddConsultants from './components/consultants/AddConsultants'
const MainRouter = ()=>(
    <div>
        <Switch>
            <Route exact path='/' component ={UserSelect}></Route>
            <Route exact path='/admin' component ={AdminLogin}></Route>
            <Route exact path='/frontoffice-login' component ={FrontOfficeLogin}></Route>
            <Route exact path='/frontoffice-home' component ={FrontHome}></Route>
            <Route exact path='/frontoffice-add' component ={FrontAdd}></Route>
            <Route exact path='/frontoffice-update' component ={FrontUpdate}></Route>
            <Route exact path="/addConsultant" component={AddConsultants}></Route>
        </Switch>
    </div>
)

export default MainRouter;