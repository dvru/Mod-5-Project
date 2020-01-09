import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'



const User = (props) => {
console.log(props.user);

return (
  <div className="div7">

    <li class="list-group-item list-group-item-secondary">
          <h5>{props.user.firstName}</h5> 
          <h5>{props.user.lastName}</h5> 
          <h5>{props.user.age}</h5> 
          <br></br>
          <p>
          <button><Link className= "navLinks4" to ="/Meetup">Connect</Link></button>
          </p>
        <p>
        <br></br>
        <br></br>
        <h5>Comments:</h5>
    
        {props.comments.length !== 0 ? props.comments.map(c=> <Comments comment = {c}/>): null}
        </p>
        <br></br>
       
    </li>

</div>
  )
}
export default User;


