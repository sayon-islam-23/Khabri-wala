import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
      
      <Navbar/>
        <Switch>

          <Route exact path="/">
          <News key="general" pageSize={8} catagory="general"/>
          </Route>
          <Route exact path="/business">
          <News key="business" pageSize={8} catagory="business"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" pageSize={8} catagory="sports"/>
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment" pageSize={8} catagory="entertainment"/>
          </Route>
          <Route exact path="/health">
          <News key="health" pageSize={8} catagory="health"/>
          </Route>
          <Route exact path="/science">
          <News key="science" pageSize={8} catagory="science"/>
          </Route>
          <Route exact path="/technology">
          <News key="technology" pageSize={8} catagory="technology"/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
