import React from 'react'
import User from './User'
import { Link } from 'react-router-dom';


const UserCard = (props) => {
  console.log(props)
  let user = localStorage
  
  return (
    <div>
    <h4> {user.firstName} {user.lastName} </h4>
    <h4>age: {user.age} </h4>
    <h4>Issue name and Comment amount</h4> 
    <br></br>
    <button><Link className= "navLinks" to ="/issues">Create an Issue</Link></button>
    <br></br>
    <br></br>
    <h4>List of Users</h4>
    {props.displayUsers.map(user => <User user={user} />)}      
    </div>
    
      )
}
export default UserCard;