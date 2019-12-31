import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar'
// import MainPage from './MainPage'
import IssueContainer from './IssueContainer';
import IssueDetail from './IssueDetail';
// import UserContainer from './UserContainer'
import Meetup from './Meetup';
import HashTag from './HashTag'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "./App.css"
import MainPage from './MainPage';
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import SignUp from './SignUp';
import Home from './Home'
// import Comments from './Comments';

// import { render } from 'react-dom';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      issueData: [],
      displayIssues: [],
      singleIssue: null
    }
  }






componentDidMount(){ // fetching all the issues 
  fetch("http://localhost:8000/issues") // issue data
  .then(res => res.json())
  .then(issues => {
    this.setState({
      issueData: issues, // setting state value to issue
      displayIssues: issues,
      singleIssue: issues[1]
    })
  })
}





handleChange = (text) => { // when inputing text within the search handle 
  // your code here
  let display = this.state.displayIssues.filter((issue) => issue.name.toLowerCase().includes(text.toLowerCase())) 
  this.setState({
    issues: display
  })
}

handleIssue = (issue) => { // single issue
  // console.log(this.state.singleIssue)
  console.log(issue)
  // debugger
  this.setState({
    singleIssue:issue
  })
  // debugger
}

logout(){
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





// changeDisplay = () => {
//   this.setState({
//     displayComment: !this.state.displayComment,
//     // id: 11
//   })
// }

// addComment = (e) => {
//   e.preventDefault()
//   // debugger

//   let Comments = { content: e.target[0].value
//               }

//   this.setState({
//     comments: [...this.state.Comments, Comments],
//     displayComment: !this.state.displayComment
//   })
// }


render(){
  // console.log(this.state.singleIssue);
  return (

  <BrowserRouter>
   <NavBar/>
      <Switch>
        <Route exact path="/home"component={Home}/>
        <Route path="/mainpage" render={() => <MainPage/>}/>   

        <Route path='/register' component={SignUp}/>         
        <Route path='/login' render={(history) => <LoginPage login={this.login} history={history} />}/>
        <Route path='/logout' render={(history) => <LogoutPage logout={this.logout} history={history}/>}/>        

        <Route exact path='/issues' render={() => <IssueContainer handleChange={this.handleChange} 
                                                                  displayIssues={this.state.displayIssues}
                                                                  handleIssue={this.handleIssue}
        />}/>    
        <Route path = '/issues/:id' render= {() => <IssueDetail currentIssue={this.state.singleIssue} /> }/>

        <Route path='/Meetup' component={Meetup} />
        <Route path='/HashTag' component={HashTag} />
      </Switch>
    </BrowserRouter>
  
    );
  }
}

export default App;
