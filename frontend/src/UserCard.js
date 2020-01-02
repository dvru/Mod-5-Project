import React from 'react'
import User from './User'
import Comments from './Comments'

import { Link } from 'react-router-dom';


class UserCard extends React.Component{



  constructor() {
    super();
    this.state = {
      comments: [],
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
      let singleComment = this.sortComments(comments, localStorage.userId)
      // console.log('this is single comment', singleComment)
        this.setState({
          comments,
        userComments: singleComment  // setting state value to issue
        }, ()=> console.log('state SHOULD be set', this.state))
    })
    }

  //this finds own comments using the array of all comments AND user id 
  sortComments = (arr, id)=>{
    return arr.filter(c=> c.user_id === parseInt(id))
  }


render(){

  let user = localStorage
  // console.log (user)
    return (
      <div>
      {console.log('this is my user',user)}
      <h4>Name: {user.firstName} {user.lastName} </h4>
      <h4>Age: {user.age}</h4>
      <h4>
    
      <button>Your comments:</button>

      {this.state.userComments.length > 1 ? this.state.userComments.map(comment => <Comments comment={comment} />): null}
      <br></br>

      </h4>
      <button><Link className= "navLinks3" to ="/issues">Create an Issue</Link></button>
     
      <br></br>
      <br></br>
      <h4>List of Users</h4>
      <div class="ui grid">
      <div class="four wide column"></div>
      {this.props.displayUsers.map(user => <User user={user} comments= {this.sortComments(this.state.comments, user.id)} />)}      
      </div>
      </div>
        )
  }
}
export default UserCard;

