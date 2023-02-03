import React from 'react';
import LeadList from './LeadList';
import { useGlobalContext } from './context';
import './App.css';

function App() {

    const { leads, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <>
                <h2>Loading...</h2>
            </>
        )
    }

    return (
        <>
            <LeadList leads={leads} />
        </>
    );
}

export default App;
