import React from 'react';
import IssueContainer from './IssueContainer'
import UserContainer from './UserContainer'
import Meetup from './Meetup'
import HashTag from './HashTag'
// import MainPage from './MainPage';

function NavBar() {
  return (
<div class="ui red five item inverted menu">
  <a class="item active">
    Home 
    {/* <MainPage/> */}
  </a>
  <a class="item">
    User/Login
    <UserContainer/>
  </a>
  <a class="item">
  Issues
    <IssueContainer/>
  </a>
  <a class="item">
    Meetup
    <Meetup/>
  </a>
  <a class="item">
  #SOS
  <HashTag/>
  </a>
</div>

  );
}

export default NavBar;


