import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

const Issue = (props) => {
  return (
    <tr>
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <td>{props.issue.name}</td> 
    {/* <td>{props.issue.description}</td> */}
   
    </tr>
  )
}

export default Issue