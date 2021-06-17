import React from 'react'
import StoreIcon from '@material-ui/icons/Store'
import LoginModalWindow from './LoginModalWindow.jsx'
import SigninModalWindow from './SigninModalWindow.jsx'
import { Link }  from 'react-router-dom';

export default function () {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div id="navbar-header">
          <StoreIcon style={{ color: 'white' }}/>
          <Link to="/">
          <span>
            Plan Eat
          </span>
          </Link>
        </div>
        <div id="personalization">
          <SigninModalWindow />
          <LoginModalWindow />
        </div>
      </div>
    </div>
  )
}
