import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalListGaz from '../../Utils/GlobalListGaz';
import './Global.css';

const Global = () => {

    const { countryId } = useParams();
    const [methaneAvg, setMethaneAvg] = useState([]);
    const [carbonMonoxidAvg, setCarbonMonoxidAvg] = useState([]);
    const [ozoneAvg, setOzoneAvg] = useState([]);
    const [nitrogenDioxideAvg, setNitrogenDioxideAvg] = useState([]);
    const [methaneDesc, setMethaneDesc] = useState([]);
    const [carbonMonoxidDesc, setCarbonMonoxidDesc] = useState([]);
    const [ozoneDesc, setOzoneDesc] = useState([]);
    const [nitrogenDioxideDesc, setNitrogenDioxideDesc] = useState([]);
    const [pending, setPending] = useState(false);

    const APIConnect = axios.create({
        timeout: 10000,
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        },
    })

    useEffect(() => {

        (async () => {
            const { data: results } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/methane/average.json?country=${countryId}&begin=2020-02-10&end=2020-03-11&limit=100&offset=0`, { cache: 'reload' })
            setMethaneAvg(results);
            setPending(true);
        })();

        (async () => {
            const { data: results } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${countryId}&begin=2020-02-10&end=2020-03-11&limit=100&offset=0`, { cache: 'reload' })
            setCarbonMonoxidAvg(results);
            setPending(true);
        })();

        (async () => {
            const { data: results } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/ozone/average.json?country=${countryId}&begin=2020-02-10&end=2020-03-11&limit=100&offset=0`, { cache: 'reload' })
            setOzoneAvg(results);
            setPending(true);
        })();

        (async () => {
            const { data: results } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/nitrogendioxide/average.json?country=${countryId}&begin=2020-02-10&end=2020-03-11&limit=100&offset=0`, { cache: 'reload' })
            setNitrogenDioxideAvg(results);
            setPending(true);
        })();

        (async () => {
            const { data: description } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/products.json`, { cache: 'reload' })
            setMethaneDesc(description[0]);
            setCarbonMonoxidDesc(description[1])
            setOzoneDesc(description[2])
            setNitrogenDioxideDesc(description[3]);
        })();


    }, [countryId])

    if (pending) {
        return (
            <GlobalListGaz
                methaneAvg={methaneAvg}
                carbonMonoxidAvg={carbonMonoxidAvg}
                ozoneAvg={ozoneAvg}
                nitrogenDioxideAvg={nitrogenDioxideAvg}
                methaneDesc={methaneDesc}
                carbonMonoxidDesc={carbonMonoxidDesc}
                ozoneDesc={ozoneDesc}
                nitrogenDioxideDesc={nitrogenDioxideDesc} />
        )
    }
    return (
        <p>Loading...</p>
    )
}

export default Global;