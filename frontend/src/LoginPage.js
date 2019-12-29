import React from 'react'

export default function LoginPage(props) {


function login (e, props){
    e.preventDefault();
  
    fetch('http://localhost:8000/users/login', {
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
        console.log(user);
      if (user.status === 'success') {
          console.log(user)
        localStorage.token = user.token;
        localStorage.username = user.username;
        localStorage.firstName = user.firstName;
        localStorage.lastName = user.lastName;
        localStorage.email = user.email;
        localStorage.password = user.password;
        localStorage.age = user.age;
        localStorage.issues = user.issues;
        localStorage.comments = user.comments;
        props.history.push('/issues')
      }
    })
    e.target.reset();
  }






    return (
        <div>
            <form onSubmit={(e) => {login(e, props)} }>
                <label>username: </label>
                <input placeholder='username' type='text'></input>
                <label>password: </label>
                <input type='password'></input> 
                <button type='submit' >submit</button>
            </form>
        </div>
    
    )
}
