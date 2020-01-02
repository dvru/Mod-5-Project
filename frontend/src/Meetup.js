import React from 'react';
import { Link } from 'react-router-dom'

class Meetup extends React.Component{
  render() {
    return (
      <div>
        <h2>Lets Meet!</h2>
        <br></br>
        <br></br>
        <p>
          <h5>WOMEN WHO CODE</h5>
          <a href="https://www.meetup.com/Women-Who-Code-Houston/"><button> Women Who Code Houston Meetup</button></a>
          <br></br>
          <br></br>
          <h5>GENERAL ASSEMBLY HOUSTON</h5>
          <a href="https://www.meetup.com/GA-Houston-Coding-Data-Design-Digital-Marketing/"><button> GA Houston - Coding - Data - Design - Digital Marketing Meetup</button></a>
          <br></br>
          <br></br>
          <h5>IT EXPERIENCE</h5>
          <a href="https://www.meetup.com/ITExperience/"><button>ITExperience</button></a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </p>
        <h5>
        <a href="https://www.meetup.com/start/location?fromOrganizerLanding=true"><button> Create Your Own Meetup </button></a>
        </h5>
        <br></br>
        <br></br>
        <p><i class="handshake outline icon"></i></p>
        <br></br>
        <br></br>
        <Link className= "navLinks2" to ="/mainpage">Back to Main Page</Link>
 
      </div>
    );
  }
}

export default Meetup;