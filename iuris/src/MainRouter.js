import React from "react"
import {Route, Switch} from 'react-router-dom'
import UserSelect from './components/core/UserSelect'

const MainRouter = ()=>(
    <div>
        <Switch>
            <Route path='/' component ={UserSelect}></Route>
        </Switch>
    </div>
)

export default MainRouter;