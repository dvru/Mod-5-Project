import React from 'react'
import User from './User'
import Comments from './Comments'

import { Link } from 'react-router-dom';


class UserCard extends React.Component{



  constructor() {
    super();
    this.state = {
      // comments: [],
      userComments: []
    }
  }


  componentDidMount(){ // fetching single user
    fetch("http://localhost:8000/comments", {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    }) // single user data
    .then(res => res.json())
    .then(comments => {
      let singleComment = comments.filter(c=> c.user_id === parseInt(localStorage.id))
      // console.log('this is single comment', singleComment)
        this.setState({
        userComments: singleComment  // setting state value to issue
        }, ()=> console.log('state SHOULD be set', this.state))
    })
    }

  


render(){

  let user = localStorage
  // console.log (user)
    return (
      <div>
      <h4> {user.firstName} {user.lastName} </h4>
      <h4>Age: {user.age} </h4>

   
      <h4>Your comments: {this.state.userComments.length > 1 ? this.state.userComments.map(comment => <Comments comment={comment} />): null}</h4>
    
      
      <br></br>
      <button><Link className= "navLinks" to ="/issues">Create an Issue</Link></button>
      <br></br>
      <br></br>
      <h4>List of Users</h4>
      {this.props.displayUsers.map(user => <User user={user}  />)}      
      </div>
      
        )
  }
}
export default UserCard;