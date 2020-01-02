import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => { // sending props
  return (
    <div className="div3">
    <br></br>
    <br></br>

    <h2>Welcome</h2>
    <h2>To</h2>
    <h2>SafeOfficeS</h2>
    
    <div className="div8">SOS</div>
    <br></br>
    <br></br>
    <h7>
    <Link className= "navLinks2" to ="/register">Lets Sign You up</Link>
    <br></br>
    <br></br>
    <Link className= "navLinks2" to ="/login">Login</Link>
    </h7>
    <h6>
    <i className="folder open outline icon"></i>
    </h6>

    </div>
  )
  
}






export default Home;


