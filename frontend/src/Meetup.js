import React from 'react';
import { Link } from 'react-router-dom'
// import 'WWC.jpg'

class Meetup extends React.Component{
  render() {
    return (
      <div className="div9">
      <br></br>
        <br></br>
        <br></br>
        <p>
        <img src={ require('./WWC.jpg' )  } alt="" />
         <br></br>
 
          <a href="https://www.meetup.com/Women-Who-Code-Houston/"><button> Women Who Code Houston Meetup</button></a>
          <br></br>
          <br></br>

          <img src={ require('./GA.png') } alt="" />
          <br></br>
          <a href="https://www.meetup.com/GA-Houston-Coding-Data-Design-Digital-Marketing/"><button> GA Houston - Digital Marketing Meetup</button></a>
          <br></br>
          <br></br>
          <br></br>
          <img src={ require('./ITEXPERIENCE.png') } alt="" />
          <br></br>
          <a href="https://www.meetup.com/ITExperience/"><button>ITExperience</button></a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h5>Create Your Own Meetup!</h5>
        <a href="https://www.meetup.com/start/location?fromOrganizerLanding=true"><button>Let's Meet!</button></a>
        </p>
        <Link className= "navLinks2" to ="/mainpage">Back to Main Page</Link>
        <div className="div12">
        <Link className= "navLinks2" to ="/logout">Wanna logout?</Link>
        </div>
      </div>
    );
  }
}

export default Meetup;