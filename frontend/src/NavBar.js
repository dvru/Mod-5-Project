import React from 'react';
// import IssueContainer from './IssueContainer'
// import UserContainer from './UserContainer'
// import UserCard from './UserCard'
// import Meetup from './Meetup'
// import HashTag from './HashTag'
// import MainPage from './MainPage';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';




class NavBar extends React.Component {

  // constructor(props) {
  //   super(props);
    
  // }
    


  render() {

  return (
    
<div>

<Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">

      <Link className= "navLinks" to ="/mainpage">Main Page</Link>

      <Link className= "navLinks" to ="/register">Sign Up</Link>
      <Link className= "navLinks" to ="/login">Login</Link>
      

      <Link className= "navLinks" to ="/issues">Issues</Link>

      <Link className= "navLinks" to ="/Meetup">Meetup</Link>

      <Link className= "navLinks" to ="/HashTag">#SOS</Link>
      <Link className= "navLinks" to ="/logout">Logout</Link>
    
    </Nav>
</Navbar>

</div>
  )
  }
}

export default NavBar;
