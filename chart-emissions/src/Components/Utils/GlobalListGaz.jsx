import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GlobalListGaz = (props) => {
    const { countryId } = useParams();
    return (
        <main className='main-global'>
            <h3>Global stats for {countryId}</h3>
        </main>
    )
}

export default GlobalListGaz;