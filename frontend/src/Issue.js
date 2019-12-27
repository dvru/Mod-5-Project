import React from 'react'

const Issue = (props) => {
  return (
    <tr>
    <td>{props.issue.name}</td> 
    <td>{props.issue.description}</td>
    </tr>
  )
}

export default Issue