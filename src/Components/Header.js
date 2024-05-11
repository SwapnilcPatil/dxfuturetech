import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  const [activeTab, setActiveTab] = useState('rent');

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <header>
      <div>
        <img src={require('../Assets/logo.png')} alt='logo' />
      </div>

      <nav>
        <ul>
          <span className={activeTab === 'home' ? 'tab-active' : ''} onClick={() => handleTabClick('home')}>
            <Link to="/">Home</Link>
          </span>
          <span className={activeTab === 'lettings' ? 'tab-active' : ''} onClick={() => handleTabClick('lettings')}>
            <Link to="/lettings">Lettings</Link>
          </span>
          <span className={activeTab === 'rent' ? 'tab-active' : ''} onClick={() => handleTabClick('rent')}>
            <Link to="/">Rent</Link>
          </span>
        </ul>
      </nav>

      <div className='right-notifications'>
        <img className='margin-12' src={require('../Assets/Notification.png')} alt='logo' />
        <img className='margin-12' src={require('../Assets/Profile.png')} alt='logo' />
        <p className='margin-12'>My Druce</p>
      </div>
    </header>
  );
}

export default Header;
