import React from 'react';
// import IssueContainer from './IssueContainer'
// import UserContainer from './UserContainer'
// import UserCard from './UserCard'
// import Meetup from './Meetup'
// import HashTag from './HashTag'
// import MainPage from './MainPage';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import LogoutPage from './LogoutPage'




class NavBar extends React.Component {

  // constructor(props) {
  //   super(props);
    
  // }



  render() {

  return (
    
  
<Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <button><Link className= "navLinks" to ="/home">Home</Link></button>


      <button><Link className= "navLinks" to ="/register">Sign Up</Link></button>
      <button><Link className= "navLinks" to ="/login">Login</Link></button>

      <button><Link className= "navLinks" to ="/mainpage">Main Page</Link></button>

      <button><Link className= "navLinks" to ="/issues">Issues</Link></button>

      <button><Link className= "navLinks" to ="/Meetup">Meetup</Link></button>

     
      <button><Link className= "navLinks" to ="/logout">Logout</Link></button>
      
    </Nav>
</Navbar>


  )
  }
}

export default NavBar;
