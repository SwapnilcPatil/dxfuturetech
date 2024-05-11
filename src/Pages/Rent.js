import React, { useState } from 'react';
import RentTabs from '../Components/RentTabs';
import Properties from '../Pages/Properties'

function RentPage() {
  const [showProperties, setShowProperties] = useState(false);

  const handleTabClick = tabName => {
    if (tabName === 'properties') {
      setShowProperties(true);
    } else {
      setShowProperties(false);
    }
  };
  return (
    <>
      <div className='rent-page-container'>
        <p className='rent-light'>Rent<span className='rent-dark'>&nbsp;&gt;&nbsp;Viewing</span></p>
        <p className='Register-message'>Register with us to Jump the Queue</p>
      </div>
      <RentTabs onTabClick={handleTabClick} />
      {showProperties && <Properties />}
    </>
  );
}

export default RentPage;
