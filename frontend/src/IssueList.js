import React from 'react';
import Issue from './Issue.js'
import { Link } from 'react-router-dom'

const IssueList = (props) => {
  // console.log(props.displayIssues)
  return (
    <div className="div6">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {props.displayIssues.map(issue => <Issue issue={issue} handleIssue={props.handleIssue} />)}
    <br></br>
    <div className="div11">
    <Link className= "navLinks2" to ="/mainpage">Back to Main Page</Link>
    </div>
    </div>
  );
}

export default IssueList;

