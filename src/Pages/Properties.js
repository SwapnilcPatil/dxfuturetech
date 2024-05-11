import React, { useState } from 'react';
import PropertyCard from '../Components/PropertyCards';
import Image_1 from '../Assets/Image.jpg';
import Image_2 from '../Assets/Image (1).jpg';
import Image_3 from '../Assets/Image (2).jpg';
import Image_4 from '../Assets/Image (3).jpg';
import Image_5 from '../Assets/Image (4).jpg';

function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState('recommended');

  // Mock data for properties
  const properties = [
    { id: 1, image: Image_1, contact: 'John Doe', address: '21 Baker Street, NW1', type: 'Appartment' },
    { id: 2, image: Image_2, contact: 'John Doe', address: 'The Ritz- Carlton Residences', type: 'Villa' },
    { id: 3, image: Image_3, contact: 'John Doe', address: '21 Baker Street, NW1', type: 'Flat' },
    { id: 4, image: Image_4, contact: 'John Doe', address: 'The Ritz- Carlton Residences', type: 'Appartment' },
    { id: 5, image: Image_4, contact: 'John Doe', address: '21 Baker Street, NW1', type: 'Villa' },
    { id: 6, image: Image_5, contact: 'John Doe', address: 'The Ritz- Carlton Residences', type: 'Appartment' },
  ];

  const handleFilterClick = filterName => {
    setActiveFilter(filterName);
  };

  return (
    <div className='properties-container'>
      <div className='filter-button'>
        <button className={activeFilter === 'recommended' ? 'btn-active' : ''} onClick={() => handleFilterClick('recommended')}>
          Recommended
        </button>
        <button className={activeFilter === 'handpicked' ? 'btn-active' : ''} onClick={() => handleFilterClick('handpicked')}>
          Handpicked(Phase 2)
        </button>
        <button className={activeFilter === 'saved' ? 'btn-active' : ''} onClick={() => handleFilterClick('saved')}>
          Saved
        </button>
      </div>
      <h5 className='properties-header'>Properties</h5>
      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertiesPage;
