import React from 'react'

class LoginPage extends React.Component {

// handleLogin() {
//     fetch('http://localhost:8000/users/1', {
//         headers: {
//             "Authorization": `Bearer ${localStorage.token}`
//         }
//     })
//     .then(res => res.json())
//     .then(console.log);
// }


// constructor(){
//     super()
// this.state = {
//     user: []
// }}


login = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    }).then(res => res.json())
    .then(user => {
      if (user.status === 'success') {
        localStorage.token = user.token;
        localStorage.username = user.username;
        localStorage.firstName = user.firstName;
        localStorage.lastName = user.lastName;
        localStorage.email = user.email;
        localStorage.age = user.age;
        localStorage.issues = user.issues;
        localStorage.comments = user.comments;
        this.props.history.push('/mainpage')
      }
    });
  }





render(){
    return (
        <div>
            <form onSubmit={(e) => this.login(e)}>
                <label>username: </label>
                <input placeholder='username' type='text'></input>
                <label>password: </label>
                <input type='password'></input> 
                <button type='submit' >submit</button>
            </form>
        </div>
    
    )
    }
}
export default LoginPage