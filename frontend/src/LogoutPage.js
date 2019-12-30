import React from 'react'

export default function LogoutPage(props) {

function logout(e, props) {
    localStorage.clear();
    localStorage.firstName = this.state.defaultUser.firstName;
    localStorage.lastName = this.state.defaultUser.lastName;
    localStorage.age = this.state.defaultUser.age;
    localStorage.bio = this.state.defaultUser.bio;
    this.setState({
      user: this.state.defaultUser
    })
    // console.log(localStorage);
  }


return (
    <div>
        <h1>Goodbye!</h1>
        <form onSubmit={(e) => {logout(e, props)}}>
        <button type='submit' onClick= {() => props.history.push('/home')}>Logout</button>
        </form>
    </div>
)

}