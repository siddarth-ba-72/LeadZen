import React, { useState } from 'react';
import LeadCard from './LeadCard';

const LeadList = ({ leads }) => {

    const [leadsArray, setLeadsArray] = useState(leads);
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if (!e.target.value)
            return setLeadsArray(leads);
        const resultsArray = leadsArray.filter(lead => lead.company.name.toLowerCase().includes(e.target.value));
        setLeadsArray(resultsArray);
    }

    return (
        <>
            <header className='search__section'>
                <form className="search__form" onSubmit={handleSubmit}>
                    <input
                        className="search__input"
                        type="text"
                        id="search"
                        placeholder='search...'
                        onChange={handleSearchChange}
                    />
                    <button className="search__button">
                        search
                    </button>
                </form>
            </header>
            {
                leadsArray.map((lead) => {
                    return <LeadCard lead={lead} />
                })
            }
        </>
    );
};

export default LeadList;