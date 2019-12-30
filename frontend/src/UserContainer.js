import React from 'react'
import UserCard from './UserCard'

export default class UserContainer extends React.Component {


    constructor() {
        super();
    
        this.state = {
          userData: [],
          displayUsers: []
        }
      }



componentDidMount(){ // fetching all the issues 
    fetch("http://localhost:8000/users") // issue data
    .then(res => res.json())
    .then(users => {
        this.setState({
        userData: users, // setting state value to issue
        displayUsers: users
        })
    })
    }



    render() {
        // console.log(this.props)  
        return (
            <div>
                <UserCard displayUsers={this.state.displayUsers}/>
            </div>
        )
    }
}

