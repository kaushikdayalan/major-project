import React from "react"
import {Route, Switch} from 'react-router-dom'
import UserSelect from './components/core/UserSelect'
import AdminLogin from './components/core/AdminLogin'

const MainRouter = ()=>(
    <div>
        <Switch>
            <Route exact path='/' component ={UserSelect}></Route>
            <Route exact path='/admin' component ={AdminLogin}></Route>
        </Switch>
    </div>
)

export default MainRouter;