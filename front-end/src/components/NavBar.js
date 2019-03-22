import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
export default class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' React Bootstrap'}
    </Navbar.Brand>
  </Navbar>
            </div>
            
        )
    }
}