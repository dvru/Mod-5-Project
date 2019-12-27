import React from 'react';
import Issue from './Issue.js'
import IssueDetail from './IssueDetail'

const IssueList = (props) => {
  //  console.log(props)
  return (
    <div>
    <IssueDetail/>
    {props.displayIssues.map(issue => <Issue issue={issue}/>)}
    </div>
  );
}

export default IssueList;

// {props.displayTransactions.map(transaction => <Transaction transaction={transaction}/>)}