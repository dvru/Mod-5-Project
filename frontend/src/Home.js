import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => { // sending props
  return (
    <div className="div3">
    <h2>Welcome</h2>
    <h2>To</h2>
    <h2>SafeOfficeS</h2>
    <br></br>
    <Link className= "navLinks2" to ="/register">Lets Sign You up</Link>
    <i className="folder open outline icon"></i>
    </div>
  )
  
}






export default Home;


