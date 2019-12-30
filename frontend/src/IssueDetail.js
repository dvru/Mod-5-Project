import React from 'react';
import CommentForm from './CommentForm'
import { Link } from 'react-router-dom';


function IssueDetail(props) {
  console.log(props.currentIssue)
  // debugger 

  return (
    <ul>
    <li>
    <div>
    {props.currentIssue ?
    <div>
    Description:
    <br></br>
    
   <p>{props.currentIssue.description}</p>
  
     <br/>
    <CommentForm/>
   
    </div> 
    
    :
    ''
  }
  <br></br>
  <Link className= "navLinks" to ="/issues">Back</Link>

  </div>
  </li>
  </ul>
  );
}

export default IssueDetail;