import React from 'react';
import { Link } from 'react-router-dom'

class Meetup extends React.Component{
  render() {
    return (
      <div>
<h2>Lets Meet!</h2>
<br></br>
<h3>Meetup name:</h3>
<button> Create Meetup </button>
<br></br>
<br></br>
<Link className= "navLinks" to ="/mainpage">Back to Main Page</Link>
{/* different meetups to link to */}
      </div>
    );
  }
}

export default Meetup;