import React from 'react'
// import {Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Issue = (props) => {
  // console.log(props.issue)
  // debugger
  return (
    <div>
    {props.issue ? 
      <div>
      <tr>
        {/* <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-info">Search</Button>
       </Form> */}
    </tr>
      <ul>
      <li>
     <Link className= "navLinks2" to = {`/issues/${props.issue.id}`} onClick= {() => props.handleIssue(props.issue)}> {props.issue.name} </Link>
     </li>
     </ul>
   
     </div>
     :
     ''
    }
    
    </div>
  )
}

export default Issue;


