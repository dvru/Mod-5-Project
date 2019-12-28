import React from 'react';
import Issue from './Issue.js'


const IssueList = (props) => {
  //  console.log(props)
  return (
    <div>

    {props.displayIssues.map(issue => <Issue issue={issue}/>)}
    </div>
  );
}

export default IssueList;

