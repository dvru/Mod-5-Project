import React from 'react';
import CommentForm from './CommentForm'


function IssueDetail(props) {
  console.log(props.currentIssue)
  // debugger 

  return (

    <div>
    {props.currentIssue ?
    <div>
    Description:
    <br></br>
   {props.currentIssue.description}
     <br/>
    <CommentForm/>
    </div> 
    :
    ''
  }
  </div>
  );
}

export default IssueDetail;