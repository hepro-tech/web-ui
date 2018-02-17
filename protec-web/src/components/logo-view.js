import React from 'react';

import logo from '../assets/logo.png';

export default class LogoView extends React.Component {

  render() {
    
    return(<div className='logo-view'>
      <div className='logo-cell'>
        <img src={logo} alt="Logo"/>
        <h1> hepro.tech - A Push Notification Security Solution</h1>
      </div>
    </div>)
  }
}