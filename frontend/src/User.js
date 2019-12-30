import React from 'react'
import { Link } from 'react-router-dom'



const User = (props) => {
    // console.log(localStorage);
    return (
    <div>
    <ul>
    <li>
      <h5>{props.user.firstName} {props.user.lastName}</h5> 
    
      <h5>{props.user.age}</h5>
      <h5>Issue name and Comments</h5>
      <button><Link className= "navLinks" to ="/Meetup">Connect</Link></button>
    </li>
    </ul>
    </div>
      )
}
export default User;

