import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar'
// import MainPage from './MainPage'
import IssueContainer from './IssueContainer';
import UserContainer from './UserContainer'
import Meetup from './Meetup';
import HashTag from './HashTag'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './MainPage';
import LoginPage from './LoginPage'
// import { render } from 'react-dom';


class App extends React.Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     user: []
  //   }
  // }

// logout = () => {
//   localStorage.clear();
//   localStorage.firstName = this.state.defaultUser.firstName;
//   localStorage.lastName = this.state.defaultUser.lastName;
//   localStorage.age = this.state.defaultUser.age;
//   localStorage.bio = this.state.defaultUser.bio;
//   this.setState({
//     user: this.state.defaultUser
//   })
//   // console.log(localStorage);
// }

// login = (e) => {
//   e.preventDefault();

//   fetch('http://localhost:3000/users/login', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       username: e.target[0].value,
//       password: e.target[1].value
//     })
//   }).then(res => res.json())
//   .then(user => {
//     if (user.status === 'success') {
//       localStorage.token = user.token;
//       localStorage.username = user.username;
//       localStorage.firstName = user.firstName;
//       localStorage.lastName = user.lastName;
//       localStorage.email = user.email;
//       localStorage.age = user.age;
//       localStorage.issues = user.issues;
//       localStorage.q = user.q;
//       // localStorage = user;
//       console.log(user);
//       this.setState({
//         user 
//       })
//     }
//   });
// }



render(){
  
  return (
    <div className="App">

     <BrowserRouter>
     <NavBar {...this.props}/>
       <Switch>
       <Route exact path='/' render={() => <MainPage {...this.state.user} />} />
         <Route exact path='/users' component={UserContainer} />
         <Route exact path='/issue' render={() => <IssueContainer issues={this.state.user.issues} />} />         
         <Route exact path='/Meetup' component={Meetup} />
         <Route exact path='/Hashtag' component={HashTag} />
         <Route exact path='/login' render={() => <LoginPage logout={this.logout} login={this.login} />} history={this.history} />
       </Switch>
     </BrowserRouter>

    

    </div>
  );
}
  
}

export default App;
