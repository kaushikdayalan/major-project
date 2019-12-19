import React from 'react';
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import "./App.css"

const App = ()=>(
  <BrowserRouter><MainRouter/></BrowserRouter>
)


export default App;