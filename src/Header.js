import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
  return (
    <div className="header">
 
     <div className="header__left">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt=""/>
      <div className="header__search">
         <SearchIcon/>
         <input type="text"/>
       </div>
     </div>
     <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Chat'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar="https://media-exp3.licdn.com/dms/image/C4E03AQGxwa6HXssxpw/profile-displayphoto-shrink_100_100/0/1612790554685?e=1631145600&v=beta&t=fCqJ1uY-05Px-NefmBTlCxFDbP2lFWGYXS1Ev6Hbsm4" title='Me'/>
     </div>
    </div>
  );
}

export default Header;