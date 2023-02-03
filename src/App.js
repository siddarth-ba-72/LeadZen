import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeadList from './Components/LeadList';
import Pagination from './Components/Pagination';
import './App.css';

function App() {

    const leadsPerPage = 2;
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getLeads = async () => {
            setIsLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setLeads(res.data);
            setIsLoading(false);
        };
        getLeads();
    }, []);

    if (isLoading) {
        return (<div className='loader'>Loading...</div>);
    }

    const indexOfLastLead = currentPage * leadsPerPage;
    const indexOfFirstLead = indexOfLastLead - leadsPerPage;
    const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
    console.log(currentLeads);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <LeadList leads={currentLeads} />
            <Pagination
                leadsPerPage={leadsPerPage}
                totalLeads={leads.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
}

export default App;
