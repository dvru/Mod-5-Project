import React from 'react';
import Issue from './Issue.js'


const IssueList = (props) => {
  // console.log(props.displayIssues)
  return (
    <div>

    {props.displayIssues.map(issue => <Issue issue={issue} handleIssue={props.handleIssue} />)}
    </div>
  );
}

export default IssueList;

