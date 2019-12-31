import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => { // sending props
  return (
    <div>
    <h2>Welcome To SafeOfficeS</h2>
    <Link className= "navLinks" to ="/register">Lets Sign You up</Link>
    </div>
  )
}

export default Home;