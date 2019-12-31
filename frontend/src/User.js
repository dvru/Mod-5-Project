import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'



const User = (props) => {
console.log(props.user);

return (
<div>
  <ul class="list-group">
    <li class="list-group-item list-group-item-danger">
          <h2>{props.user.firstName} {props.user.lastName}</h2> 
            <h5>{props.user.age}</h5> 
          <h5>Issues:</h5>
        <h5>{props.comments.length !== 0 ? props.comments.map(c=> <Comments comment = {c}/>): null}</h5>
        <button><Link className= "navLinks" to ="/Meetup">Connect</Link></button>
    </li>
  </ul>
</div>
  )
}
export default User;


