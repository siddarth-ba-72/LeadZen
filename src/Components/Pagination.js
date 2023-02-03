import React from 'react';

const Pagination = ({ leadsPerPage, totalLeads, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLeads / leadsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='pageNum'>
                    <a
                        onClick={() => paginate(number)}
                        href='!#'
                        className={number == currentPage ? 'active' : ''}
                    >
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;