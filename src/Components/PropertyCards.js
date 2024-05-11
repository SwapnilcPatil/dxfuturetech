import React from 'react';

function PropertyCard({ property }) {
  const { image, type, address } = property;

  return (
    <div className="property-card">
      <img src={image} alt="Property" />
      <div className='property-type'>{type}</div>
      <div className='property-info'>
        <p className='property-address'>{address}</p>
        <div className='logo-name'>
          <span className='margin-right-30'><span className='bed-icon'><img src={require('../Assets/Path 61937.png')} alt='beds' /></span>3</span>
          <span className='margin-right-30'><span className='bed-icon'><img src={require('../Assets/Group 354.png')} alt='bath' /></span>2</span>
          <span className='margin-right-30'><span className='bed-icon'><img src={require('../Assets/Group 350.png')} alt='area' /></span>333 sqft</span>
        </div>
        <p className='property-price'>£850 per week</p>
        <div className='property-buttons'>
          <button className='view-btn'><img src={require('../Assets/calendar.png')} alt='calendar' />Viewing</button>
          <button className='offer-btn'><img src={require('../Assets/offer.png')} alt='offer' />Offer</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
