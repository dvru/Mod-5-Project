import React from 'react'

export default function LogoutPage(props) {

function logout(e, props) {
    localStorage.clear();
    // localStorage.firstName = this.state.defaultUser.firstName;
    // localStorage.lastName = this.state.defaultUser.lastName;
    // localStorage.age = this.state.defaultUser.age;
    // localStorage.bio = this.state.defaultUser.bio;
  
    props.history.history.push('/home')
  
    // if (localStorage.clear === 'clear') {
    //   // console.log(localStorage);
    //   // console.log(props)
    //   // debugger
    //   props.history.push('/home');
    // }
  }
return (
    <div>
        <h2> Are you sure you wanna go?</h2>
        <h4> Here's a few links for your support:</h4>
        <br></br>
        <form onSubmit={(e) => {logout(e, props)}}>
        <p>
        <button type='submit'>logout</button>
        </p>
        </form>
    </div>
)

}

// if (user.status === 'success') {
//   // console.log(user)
// localStorage.token = user.token;
// localStorage.userId = user.id
// localStorage.username = user.username;
// localStorage.firstName = user.firstName;
// localStorage.lastName = user.lastName;
// localStorage.email = user.email;
// localStorage.password = user.password;
// localStorage.age = user.age;
// localStorage.issues = user.issues;
// localStorage.comments = user.comments;
// if (user.status === 'success') {
//     // console.log(localStorage);
//     // debugger
//     props.history.history.push('/mainpage');
// }
// }