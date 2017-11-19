import React, {Component} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Skillset from './Skillset'
import MyHistory from './MyHistory'
import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">     
            <Route exact path='/' pageColor="orange" component={Home} />
            <Route path='/Skillset' pageColor="blue" exact component={Skillset} />
            <Route path='/MyHistory' pageColor="green" exact component={MyHistory} />
            <Navbar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
