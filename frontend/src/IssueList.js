import React from 'react';
import Issue from './Issue.js'
import { Link } from 'react-router-dom'

const IssueList = (props) => {
  // console.log(props.displayIssues)
  return (
    <div>
    <br></br>
    <br></br>
    {props.displayIssues.map(issue => <Issue issue={issue} handleIssue={props.handleIssue} />)}
    <br></br>
    <Link className= "navLinks3" to ="/mainpage">Back to Main Page</Link>
    </div>
  );
}

export default IssueList;

