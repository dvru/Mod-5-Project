import React from 'react';
import UserCard from './UserCard'

class UserContainer extends React.Component { // which holds all User Login Form  


constructor(){
super()
this.state = {
    userData: []
}
}

// componentDidMount(){ // fetching all the users 
//     fetch("http://localhost:8000/users") // user data
//     .then(res => res.json())
//     .then(users => {
//       this.setState({
//         userData: users, // setting state value to users
//       })
//     })
//   }




render() {
    return (
    <div>
    {/* <UserCard userData={this.state.users}/> */}
    </div>
  );
}
}

export default UserContainer;

