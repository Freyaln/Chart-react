import './Countries.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AlphabeticalList from '../../Utils/AlphabeticalList';
const Countries = () => {

    const [countriesList, setCountriesList] = useState([]);
    const [pending, setPending] = useState(false);

    const APIConnect = axios.create({
        timeout: 1000,
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        },
    })

    useEffect(() => {

        (async () => {
            const { data: results } = await APIConnect.get('https://api.v2.emissions-api.org/api/v2/countries.json', { cache: 'reload' })

            setCountriesList(results);
            setPending(true);
        })();


    }, [])

    if (pending === true) {
        return (
            <AlphabeticalList countriesList={countriesList} />
        )
    }
    else {
        return (
            <p>Loading...</p>
        )
    }
}

export default Countries;