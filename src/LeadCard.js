import React, { useState } from 'react';

const LeadCard = ({ lead }) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className='leads__overview'>
            <div className='leads__company'>
                <h3>{lead.company.name}</h3>
                <h4>{lead.company.catchPhrase}</h4>
            </div>
            <div className='leads__cont_person'>
                <h3>Contact Person</h3>
                <h4 className='lead__name'>{lead.name}</h4>
                <h4>Email</h4>
                <h5>{lead.email}</h5>
            </div>
            <div className='leads__location'>
                <h3>City</h3>
                <h4>{lead.address.city}</h4>
            </div>
            <div className='leads__toggle_button'>
                <button
                    className='leads__btn'
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
            </div>
            {
                showDetails ?
                    <div className='leads__details'>
                        <div className='leads__description'>
                            <h3>Description</h3>
                            <h5>{lead.company.bs}</h5>
                        </div>
                        <div className='leads__details'>
                            <div className='leads__contacts'>
                                <h3>Contact person</h3>
                                <h4>{lead.name}</h4>
                                <h3>Username</h3>
                                <h4>{lead.username}</h4>
                                <h3>Phone number</h3>
                                <h4>{lead.phone}</h4>
                                <h3>Website</h3>
                                <h4>{lead.website}</h4>
                            </div>
                            <div className='leads__address'>
                                <h3>Address</h3>
                                <h4>{lead.address.suite}, {lead.address.street}, {lead.address.city}, {lead.address.zipcode}</h4>
                                <h3>City</h3>
                                <h4>{lead.address.city}</h4>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
};

export default LeadCard;