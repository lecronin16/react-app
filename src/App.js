import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import { Route,Routes, BrowserRouter } from 'react-router-dom'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Lauren'
    }
  }


  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />   
        <Routes>    
        <Route path ='/' element={<Home /> }/>
        <Route path='contact' element ={<Contact />}/>
        </Routes> 
      </div>
      </BrowserRouter>
    )
  }
}

