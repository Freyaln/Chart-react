import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StatisticsCharts from '../../Utils/Statisticscharts';
import './Statistics.css';

const Statistics = () => {

    const [methane, setMethane] = useState([]);
    const [carbonMonoxid, setCarbonMonoxid] = useState([]);
    const [ozone, setOzone] = useState([]);
    const [nitrogenDioxid, setNitrogenDioxid] = useState([]);

    const APIConnect = axios.create({
        timeout: 10000,
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        },
    })

    useEffect(() => {

        (async () => {
            const { data } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/methane/statistics.json?begin=2020-01-01&end=2020-02-01&limit=100&offset=0`, { cache: 'reload' })
            setMethane(data);
            console.log(data)
        })();

        (async () => {
            const { data } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?interval=day&begin=2020-05-01&end=2020-06-01&limit=100&offset=0`, { cache: 'reload' })
            setCarbonMonoxid(data);
            console.log(data)
        })();

        (async () => {
            const { data } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/ozone/statistics.json?begin=2020-01-01&end=2020-02-01&limit=100&offset=0`, { cache: 'reload' })
            setOzone(data);
            console.log(data)
        })();

        (async () => {
            const { data } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/nitrogendioxide/statistics.json?interval=day&begin=2020-05-01&end=2020-06-01&limit=100&offset=0`, { cache: 'reload' })
            setNitrogenDioxid(data);
            console.log(data)
        })();

    }, []);

    return (

        <StatisticsCharts
            methane={methane}
            carbonMonoxid={carbonMonoxid}
            ozone={ozone}
            nitrogenDioxid={nitrogenDioxid} />

    )
}

export default Statistics;