import React from 'react';
import IssueContainer from './IssueContainer'
import UserContainer from './UserContainer'
// import UserCard from './UserCard'
import Meetup from './Meetup'
import HashTag from './HashTag'
import MainPage from './MainPage';



function NavBar(props) {
  return (
    
<div>
<ul>
<button> <MainPage/> Home </button>
<br></br>
<button> <UserContainer/> User/Login </button>
<br></br>
<button> <IssueContainer/> Issues </button>
<br></br>
<button> <Meetup/> Meetup</button>
<br></br>
<button> <HashTag/> #SOS</button>
<br></br>
</ul>
</div>

  );
}



export default NavBar;


/* <div class="ui secondary menu">
  <a class="active item">
  <MainPage/> Home 
  </a>
  <a class="item">
  <UserContainer/> User/Login 
  </a>
  <a class="item">
  <IssueContainer/> Issues 
  </a>
  <a class="item">
  <Meetup/> Meetup
  </a>
  <a class="item">
  <HashTag/> #SOS
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search...">
          <i class="search link icon"></i>
      </div>
    </div>
  </div>
  </div>
    <a class="ui item">
      Logout
    </a>
  </div> */