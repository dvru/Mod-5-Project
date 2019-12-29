import React from 'react'

export default function LogoutPage() {

// logout(){
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
        <div>
            <h1>Logged out</h1>
             {/* <form onSubmit={(e) => {logout(e, props)}}>
                <button type='logout' >Logout</button>
            </form> */}
        </div>
    )

}