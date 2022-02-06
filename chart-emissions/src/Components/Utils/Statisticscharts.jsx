import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const StatisticsCharts = (props) => {


    const [typeOfChartMethane, setTypeOfChartMethane] = useState('line');
    const [typeOfChartMonoxid, setTypeOfChartMonoxid] = useState('line');
    const [typeOfChartOzone, setTypeOfChartOzone] = useState('line');
    const [typeOfChartNitrogenDioxid, setTypeOfChartNitrogenDioxid] = useState('line');

    const methane = props.methane;
    const carbonMonoxid = props.carbonMonoxid
    const ozone = props.ozone;
    const nitrogenDioxid = props.nitrogenDioxid;
    let methaneMin = [];
    let methaneMax = [];
    let methaneDay = [];
    let carbonMin = [];
    let carbonMax = [];
    let carbonDay = [];
    let ozoneMin = [];
    let ozoneMax = [];
    let ozoneDay = [];
    let nitrogenMin = [];
    let nitrogenMax = [];
    let nitrogenDay = [];

    console.log(ozone);

    for (let i = 0; i < methane.length; i++) {
        methaneMin.push(methane[i].value.min);
        methaneMax.push(methane[i].value.max);
        methaneDay.push(methane[i].time.interval_start);
    }


    const methaneData = {
        labels: methaneDay,
        datasets: [
            {
                label: 'Minimum January 2020',
                data: methaneMin.map((item) => item),
                fill: true,
                borderColor: 'rgb(220, 192, 192)',
                backgroundColor: 'rgba(220, 192, 192, 0.4)'
            },
            {
                label: 'Maximum January 2020',
                data: methaneMax.map((item) => item),
                fill: true,
                borderColor: 'rgb(255, 51, 51)',
                backgroundColor: 'rgba(255, 51, 51, 0.4)'
            }
        ]
    }

    for (let i = 0; i < carbonMonoxid.length; i++) {
        carbonMin.push(carbonMonoxid[i].value.min);
        carbonMax.push(carbonMonoxid[i].value.max);
        carbonDay.push(carbonMonoxid[i].time.interval_start);
    }


    const monoxidData = {
        labels: carbonDay,
        datasets: [
            {
                label: 'Minimum May 2020',
                data: carbonMin.map((item) => item),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
            },
            {
                label: 'Maximum May 2020',
                data: carbonMax.map((item) => item),
                fill: true,
                borderColor: 'rgb(0, 204, 102)',
                backgroundColor: 'rgba(0, 204, 102, 0.4)',
            }
        ]
    }

    for (let i = 0; i < ozone.length; i++) {
        ozoneMin.push(ozone[i].value.min);
        ozoneMax.push(ozone[i].value.max);
        ozoneDay.push(ozone[i].time.interval_start);
    }


    const ozoneData = {
        labels: ozoneDay,
        datasets: [
            {
                label: 'Minimum January 2020',
                data: ozoneMin.map((item) => item),
                fill: true,
                borderColor: 'rgb(162, 75, 192)',
                backgroundColor: 'rgba(162, 75, 192, 0.4)'
            },
            {
                label: 'Maximum January 2020',
                data: ozoneMax.map((item) => item),
                fill: true,
                borderColor: 'rgb(255, 128, 0)',
                backgroundColor: 'rgba(255, 128, 0, 0.4)',
            }
        ]
    }

    for (let i = 0; i < nitrogenDioxid.length; i++) {
        nitrogenMin.push(nitrogenDioxid[i].value.min);
        nitrogenMax.push(nitrogenDioxid[i].value.max);
        nitrogenDay.push(nitrogenDioxid[i].time.interval_start);
    }


    const nitrogenDioxidData = {
        labels: nitrogenDay,
        datasets: [
            {
                label: 'Minimum May 2020',
                data: nitrogenMin.map((item) => item),
                fill: true,
                borderColor: 'rgb(204, 204, 0)',
                backgroundColor: 'rgba(204, 204, 0, 0.4)',
            },
            {
                label: 'Maximum May 2020',
                data: nitrogenMax.map((item) => item),
                fill: true,
                borderColor: 'rgb(204, 0, 102)',
                backgroundColor: 'rgba(204, 0, 102, 0.4)',
            }
        ]
    }

    const optionsMethane = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: 1550,
                max: 2100
            }
        }
    }

    const optionsMonoxid = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: -100,
                max: 40
            }
        }
    }

    const optionsOzone = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: 0.05,
                max: 0.3
            }
        }
    }


    const optionsNitrogen = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: -0.0002,
                max: 0.0010
            }
        }
    }
    return (

        <main className='main-statistics'>

            <h3>Worldwide statistics</h3>
            <div className='main-charts'>
                <article className="canvas-container">
                    <div className="chart">
                        {typeOfChartMethane === 'line' && <Line data={methaneData} options={optionsMethane} className='chart__display' />}
                        {typeOfChartMethane === 'bar' && <Bar data={methaneData} options={optionsMethane} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartMethane('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartMethane('line') }} className='chart__choice'>Line</button>
                        {typeOfChartMonoxid === 'line' && <Line data={monoxidData} options={optionsMonoxid} className='chart__display' />}
                        {typeOfChartMonoxid === 'bar' && <Bar data={monoxidData} options={optionsMonoxid} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartMonoxid('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartMonoxid('line') }} className='chart__choice'>Line</button>
                    </div>
                    <div className="chart">
                        {typeOfChartOzone === 'line' && <Line data={ozoneData} options={optionsOzone} className='chart__display' />}
                        {typeOfChartOzone === 'bar' && <Bar data={ozoneData} options={optionsOzone} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartOzone('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartOzone('line') }} className='chart__choice'>Line</button>
                        {typeOfChartNitrogenDioxid === 'line' && <Line data={nitrogenDioxidData} options={optionsNitrogen} className='chart__display' />}
                        {typeOfChartNitrogenDioxid === 'bar' && <Bar data={nitrogenDioxidData} options={optionsNitrogen} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartNitrogenDioxid('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartNitrogenDioxid('line') }} className='chart__choice'>Line</button>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default StatisticsCharts;