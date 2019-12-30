import React from 'react'
import User from './User'
import { Link } from 'react-router-dom';


const UserCard = (props) => {
    // console.log(localStorage);
    return (
    <div>
   
    <h4>User Name:</h4>
    <h4>age:</h4>
    <h4>Issue name and Comment amount</h4> 
    <Link className= "navLinks" to ="/issues">Create an Issue</Link>
    <div></div>
    <h4>List of Users</h4>
    {props.displayUsers.map(user => <User user={user} />)}      
    </div>
    
      )
}
export default UserCard;