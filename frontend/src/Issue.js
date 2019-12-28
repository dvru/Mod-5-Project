import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Issue = (props) => {
  return (
   <div>
   <tr>
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
 </tr>

  <Link className= "navLinks" to = {`/issues/${props.issue.id}`}> {props.issue.name}</Link>
  </div>
  )
}

export default Issue;