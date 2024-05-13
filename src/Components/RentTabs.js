import React, { useState, useEffect } from 'react';

function RentTabs({ onTabClick }) {
    const [activeTab, setActiveTab] = useState('properties');

    useEffect(() => {
        if (onTabClick) {
            onTabClick(activeTab);
        }
    }, [activeTab, onTabClick]);

    return (
        <div className='rent-tabs-container'>
            <nav>
                <ul className='rent-tabs-flex'>
                    <button className={activeTab === 'requirements' ? 'active' : ''} onClick={() => setActiveTab('requirements')}>Requirements</button>
                    <button className={activeTab === 'properties' ? 'active' : ''} onClick={() => setActiveTab('properties')}>Properties</button>
                    <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>Contact</button>
                    <button className={activeTab === 'offers' ? 'active' : ''} onClick={() => setActiveTab('offers')}>Offers</button>
                    <button className={activeTab === 'documents' ? 'active' : ''} onClick={() => setActiveTab('documents')}>Documents</button>
                </ul>
            </nav>
        </div>
    );
}

export default RentTabs;
