import React from "react"
import {Route, Switch} from 'react-router-dom'
// Core components

import UserSelect from './components/core/UserSelect'
import AdminLogin from './components/core/AdminLogin'
import FrontOfficeLogin from './components/core/FrontOfficeLogin'
//Admin components
import AddConsultants from './components/consultants/AddConsultants'
import DeleteConsultant from './components/consultants/DeleteConsultant'
import AdminHome from './components/admin/AdminHome'
import AdminFileStatusUpdate from './components/admin/AdminFileStatusUpdate'
import AdminViewDocumentStatus from './components/admin/AdminViewDocumentStatus'
import adminStatusUpdateDocsInOut from './components/admin/adminStatusUpdateDocsInOut'
//front office components
import  frontOfficeUpdate from './components/front-office/FrontOfficeUpdate'
import FrontHome from './components/front-office/FrontHome'
import FrontAdd from './components/front-office/FrontAdd'
import ViewDocumentStatus from './components/front-office/ViewDocumentStatus'
import adminStausUpdateDocsInOut from "./components/admin/adminStatusUpdateDocsInOut"

   
const MainRouter = ()=>(  
    <div>   
        <Switch>
            <Route exact path='/' component ={UserSelect}></Route>
            <Route exact path='/admin' component ={AdminLogin}></Route>
            <Route exact path='/frontoffice-login' component ={FrontOfficeLogin}></Route>
            <Route exact path='/frontoffice-home' component ={FrontHome}></Route>
            <Route exact path='/frontoffice-add' component ={FrontAdd}></Route>
            <Route exact path="/addConsultant" component={AddConsultants}></Route>
            <Route exact path="/deleteConsultant" component={DeleteConsultant}></Route>
            <Route exact path="/adminHome" component={AdminHome}></Route>
            <Route exact path="/frontOfficeUpdate" component={frontOfficeUpdate}></Route>
            <Route exact path="/viewDocuments" component={ViewDocumentStatus}></Route>
            <Route exact path="/AdminUpdateFileStatus" component={AdminFileStatusUpdate}></Route>
            <Route exact path="/adminViewDocuments" component={AdminViewDocumentStatus}></Route>
            <Route exact path="/adminStatusDocsInOut" component={adminStausUpdateDocsInOut}></Route>
        </Switch>
    </div>
)

export default MainRouter;