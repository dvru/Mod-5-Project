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
    // if (this.state.defaultUser.status === 'success') {
    //   // console.log(localStorage);
    //   // console.log(props)
    //   // debugger
    //   props.history.push('/home');
    // }
  }
return (
    <div>
        <h1>Goodbye!</h1>
        <form onSubmit={(e) => {logout(e, props)}}>
        <button type='submit' className to ="/home">lot</button>
        </form>
    </div>
)

}