import React, { useState } from 'react';

function RentTabs({ onTabClick }) {
    const [activeTab, setActiveTab] = useState('properties');
    const handleTabClick = tabName => {
        if (onTabClick) {
            onTabClick(tabName);
        }
    };

    return (
        <div className='rent-tabs-container'>
            <nav>
                <ul className='rent-tabs-flex'>
                    <button className={activeTab === 'requirements' ? 'active' : ''} onClick={() => handleTabClick('requirements')}>Requirements</button>
                    <button className={activeTab === 'properties' ? 'active' : ''} onClick={() => handleTabClick('properties')}>Properties</button>
                    <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>Contact</button>
                    <button className={activeTab === 'offers' ? 'active' : ''} onClick={() => handleTabClick('offers')}>Offers</button>
                    <button className={activeTab === 'documents' ? 'active' : ''} onClick={() => handleTabClick('documents')}>Documents</button>
                </ul>

            </nav>
        </div>
    );
}

export default RentTabs;
