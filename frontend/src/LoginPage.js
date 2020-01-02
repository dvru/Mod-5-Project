import React from 'react'

export default function LoginPage(props) {


function login (e, props){
    console.log(props)
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
        // console.log(user);
      if (user.status === 'success') {
          // console.log(user)
        localStorage.token = user.token;
        localStorage.userId = user.id
        localStorage.username = user.username;
        localStorage.firstName = user.firstName;
        localStorage.lastName = user.lastName;
        localStorage.email = user.email;
        localStorage.password = user.password;
        localStorage.age = user.age;
        localStorage.issues = user.issues;
        localStorage.comments = user.comments;
        if (user.status === 'success') {
            // console.log(localStorage);
            // debugger
            props.history.history.push('/mainpage');
        }
        }
    })
    e.target.reset();
  }

// logout(e, props) {
//     localStorage.clear();
//     localStorage.firstName = this.state.defaultUser.firstName;
//     localStorage.lastName = this.state.defaultUser.lastName;
//     localStorage.age = this.state.defaultUser.age;
//     localStorage.bio = this.state.defaultUser.bio;
//     this.setState({
//       user: this.state.defaultUser
//     })
//     // console.log(localStorage);
//   }


    return (
      <div className="div2">
                <br></br>
                <br></br>
            <form onSubmit={(e) => {login(e, props)} }>
                <label>username: </label>
                <input placeholder='username' type='text'></input>
                <br></br>
                <br></br>
                <label>password: </label>
                <input placeholder='password' type='password'></input> 
                <br></br>
                <br></br>
                <br></br>
                <button type='submit' className to ="/mainpage">submit</button>
            </form>
        </div>
    
    )
}
/* <Link className= "navLinks" to ="/Meetup">Meetup</Link> */
