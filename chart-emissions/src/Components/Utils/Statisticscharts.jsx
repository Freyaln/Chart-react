import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const StatisticsCharts = (props) => {



    const { countryId } = useParams();

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
                fill: 'yellow',
                backgroundColor: 'green',
            },
            {
                label: 'Maximum January 2020',
                data: methaneMax.map((item) => item),
                fill: 'yellow',
                backgroundColor: 'red',
            }
        ]
    }

    for (let i = 0; i < carbonMonoxid.length; i++) {
        carbonMin.push(carbonMonoxid[i].value.min);
        carbonMax.push(carbonMonoxid[i].value.max);
        carbonDay.push(carbonMonoxid[i].time.interval_start);
    }


    const carbonData = {
        labels: carbonDay,
        datasets: [
            {
                label: 'Minimum May 2020',
                data: carbonMin.map((item) => item),
                fill: 'yellow',
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Maximum May 2020',
                data: carbonMax.map((item) => item),
                fill: 'yellow',
                backgroundColor: 'rgb(220, 70, 70)',
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
                fill: 'yellow',
                backgroundColor: 'green',
            },
            {
                label: 'Maximum January 2020',
                data: ozoneMax.map((item) => item),
                fill: 'yellow',
                backgroundColor: 'red',
            }
        ]
    }

    for (let i = 0; i < nitrogenDioxid.length; i++) {
        nitrogenMin.push(nitrogenDioxid[i].value.min);
        nitrogenMax.push(nitrogenDioxid[i].value.max);
        nitrogenDay.push(nitrogenDioxid[i].time.interval_start);
    }


    const nitrogenData = {
        labels: nitrogenDay,
        datasets: [
            {
                label: 'Minimum May 2020',
                data: nitrogenMin.map((item) => item),
                fill: 'yellow',
                backgroundColor: 'green',
            },
            {
                label: 'Maximum May 2020',
                data: nitrogenMax.map((item) => item),
                fill: 'yellow',
                backgroundColor: 'red',
            }
        ]
    }

    const options = {
        maintainAspectRatio: false
    }
    return (

        <main className='main-statistics'>

            <h3>Worldwide statistics</h3>
            <div className='main-charts'>
                <article className="canvas-container">
                    <div className="chart">
                        <Line data={methaneData} options={options} />
                        <Line data={carbonData} options={options} />
                    </div>
                    <div className='chart'>
                        <Line data={ozoneData} options={options} />
                        <Line data={nitrogenData} options={options} />
                    </div>
                </article>
            </div>
        </main>
    )
}

export default StatisticsCharts;