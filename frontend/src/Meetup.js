import React from 'react';
import { Link } from 'react-router-dom'

class Meetup extends React.Component{
  render() {
    return (
      <div>
        <h2>Lets Meet!</h2>
        <br></br>
        <br></br>
          <a href="https://www.meetup.com/Women-Who-Code-Houston/"><button> Women Who Code Houston Meetup</button></a>
          <br></br>
          <br></br>
          <a href="https://www.meetup.com/GA-Houston-Coding-Data-Design-Digital-Marketing/"><button> GA Houston - Coding - Data - Design - Digital Marketing Meetup</button></a>
          <br></br>
          <br></br>
          <a href="https://www.meetup.com/ITExperience/"><button>ITExperience</button></a>
          <br></br>
          <br></br>
          <a href="https://www.meetup.com/start/location?fromOrganizerLanding=true"><button> Create Your Own Meetup </button></a>
        <br></br>
        <br></br>
        <Link className= "navLinks" to ="/mainpage">Back to Main Page</Link>
      </div>
    );
  }
}

export default Meetup;