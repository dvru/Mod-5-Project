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
      {this.state.userComments.length > 0 ? this.state.userComments.map(comment => <Comments comment={comment} />): null}
      <br></br>
      <button><Link className= "navLinks3" to ="/issues">Create an Issue</Link></button>
      </h4>
     
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4>List of Users:</h4>
      <br></br>
      <br></br>
      <br></br>
      <div style={{overflow:"scroll",height:'40em'}}>
      {this.props.displayUsers.map(user => <User user={user} comments= {this.sortComments(this.state.comments, user.id)} />)}      
      </div>

      </div>
      
        )
  }
}
export default UserCard;

