import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const GlobalListGaz = (props) => {



    const { countryId } = useParams();
    const methaneDatas = props.methaneAvg;
    const monoxidDatas = props.carbonMonoxidAvg;
    const ozoneDatas = props.ozoneAvg;
    const nitrogenDioxideDatas = props.nitrogenDioxideAvg;
    const methaneDesc = props.methaneDesc;
    const carbonMonoxidDesc = props.carbonMonoxidDesc;
    const ozoneDesc = props.ozoneDesc;
    const nitrogenDioxideDesc = props.nitrogenDioxideDesc;
    let methaneAvg = [];
    let methaneLabelsStart = [];
    let monoxidAvg = [];
    let monoxidLabelsStart = [];
    let ozoneAvg = [];
    let ozoneLabelsStart = [];
    let nitrogenDioxideAvg = [];
    let nitrogenDioxideLabelsStart = [];


    console.log(methaneDesc);

    for (let i = 0; i < methaneDatas.length; i++) {
        methaneAvg.push(methaneDatas[i].average);
        methaneLabelsStart.push(methaneDatas[i].start);
    }


    const methaneData = {
        labels: methaneLabelsStart,
        datasets: [
            {
                label: `Methane* average emissions for ${countryId}`,
                data: methaneAvg.map((item) => item),
                fill: 'yellow',
                borderColor: 'green',
            }
        ]
    }

    for (let i = 0; i < monoxidDatas.length; i++) {
        monoxidAvg.push(monoxidDatas[i].average);
        monoxidLabelsStart.push(monoxidDatas[i].start);
    }


    const monoxidData = {
        labels: monoxidLabelsStart,
        datasets: [
            {
                label: `Carbon Monoxid* average emissions for ${countryId}`,
                data: monoxidAvg.map((item) => item),
                fill: 'yellow',
                borderColor: 'green',
                backgroundColor: 'rgb(75, 192, 192)',
            }
        ]
    }

    for (let i = 0; i < ozoneDatas.length; i++) {
        ozoneAvg.push(ozoneDatas[i].average);
        ozoneLabelsStart.push(ozoneDatas[i].start);
    }


    const ozoneData = {
        labels: ozoneLabelsStart,
        datasets: [
            {
                label: `Ozone* average emissions for ${countryId}`,
                data: ozoneAvg.map((item) => item),
                fill: 'yellow',
                borderColor: 'yellow',
            }
        ]
    }

    for (let i = 0; i < nitrogenDioxideDatas.length; i++) {
        nitrogenDioxideAvg.push(nitrogenDioxideDatas[i].average);
        nitrogenDioxideLabelsStart.push(nitrogenDioxideDatas[i].start);
    }


    const nitrogenDioxideData = {
        labels: nitrogenDioxideLabelsStart,
        datasets: [
            {
                label: `Nitrogen Dioxide* average emissions for ${countryId}`,
                data: nitrogenDioxideAvg.map((item) => item),
                fill: 'yellow',
                borderColor: 'green',
                backgroundColor: 'rgb(220, 70, 80)',
            }
        ]
    }

    const options = {
        maintainAspectRatio: false
    }
    return (
        <main className='main-global'>
            <h3>Early 2020 global stats for {countryId}</h3>
            <div className='main-charts'>
                <article className="canvas-container">
                    <div className="chart">
                        <Line data={methaneData} options={options} />
                        <Bar data={monoxidData} options={options} />
                    </div>
                    <div className="chart">
                        <Line data={ozoneData} options={options} />
                        <Bar data={nitrogenDioxideData} options={options} />
                    </div>
                </article>
            </div>
            <section className='description'>
                <div className="description__gaz">
                    <p className="methane">
                        Methane : {methaneDesc.description}
                    </p>
                    <p className="monoxid">
                        Carbon monoxide : {carbonMonoxidDesc.description}
                    </p>
                </div>
                <div className="description__gaz">
                    <p className="ozone">
                        Ozone : {ozoneDesc.description}
                    </p>
                    <p className="nitrogen">
                        Nitrogen Dioxide : {nitrogenDioxideDesc.description}
                    </p>
                </div>
            </section>
        </main>
    )
}

export default GlobalListGaz;