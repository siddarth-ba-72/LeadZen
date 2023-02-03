import React from 'react';
import { useGlobalContext } from './context';
import './App.css';
import LeadList from './LeadList';
import Loader from './Loader';

function App() {

    const { leads, isLoading } = useGlobalContext();

    if (isLoading) {
        return (<Loader />);
    }

    return (
        <>
            <LeadList leads={leads} />
        </>
    );
}

export default App;
