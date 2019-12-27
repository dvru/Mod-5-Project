import React from 'react';
// import IssueList from './IssueList'
import Search from './Search'


class IssueContainer extends React.Component {

constructor(){
  
  super()
  this.state = {
    issueData: [],
    displayIssues: []
  }
}


componentDidMount(){ // fetching all the issues 
    fetch("http://localhost:8000/issues") // issue data
    .then(res => res.json())
    .then(issues => {
      this.setState({
        issueData: issues, // setting state value to issue
        displayIssues: issues
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



  render() {
    
    return (
      <div>
      <Search handleChange={this.handleChange} /> 
      {/* <IssueList displayIssues={this.state.displayIssues}/> */}
      </div>
    );
  }
}
export default IssueContainer;

