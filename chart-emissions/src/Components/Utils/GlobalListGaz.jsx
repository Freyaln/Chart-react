import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import Global from '../Pages/Global/Global';
import Countries from '../Pages/Countries/Countries';

const GlobalListGaz = (props) => {

    const { countryId } = useParams();
    const [typeOfChartMethane, setTypeOfChartMethane] = useState('line');
    const [typeOfChartMonoxid, setTypeOfChartMonoxid] = useState('line');
    const [typeOfChartOzone, setTypeOfChartOzone] = useState('line');
    const [typeOfChartNitrogenDioxid, setTypeOfChartNitrogenDioxid] = useState('line');


    const methaneDatas = props.methaneAvg;
    const monoxidDatas = props.carbonMonoxidAvg;
    const ozoneDatas = props.ozoneAvg;
    const nitrogenDioxidDatas = props.nitrogenDioxideAvg;
    const methaneDesc = props.methaneDesc;
    const carbonMonoxidDesc = props.carbonMonoxidDesc;
    const ozoneDesc = props.ozoneDesc;
    const nitrogenDioxidDesc = props.nitrogenDioxideDesc;
    let methaneAvg = [];
    let methaneLabelsStart = [];
    let monoxidAvg = [];
    let monoxidLabelsStart = [];
    let ozoneAvg = [];
    let ozoneLabelsStart = [];
    let nitrogenDioxidAvg = [];
    let nitrogenDioxidLabelsStart = [];

    function incrementMonthMethane() {
        for (let i = 1; i <= 12; i++) {
            if (props.monthDisplayedMethane < 12) {
                props.setMonthDisplayedMethane(props.monthDisplayedMethane + 1);
            }
            if (props.monthDisplayedMethane === 12) {
                return;
            }
        }
    }

    function incrementMonthMonoxid() {
        for (let i = 1; i <= 12; i++) {
            if (props.monthDisplayedMonoxid < 12) {
                props.setMonthDisplayedMonoxid(props.monthDisplayedMonoxid + 1);
            }
            if (props.monthDisplayedMonoxid === 12) {
                return;
            }
        }
    }

    function incrementMonthOzone() {
        for (let i = 1; i <= 12; i++) {
            if (props.monthDisplayedOzone < 12) {
                props.setMonthDisplayedOzone(props.monthDisplayedOzone + 1);
            }
            if (props.monthDisplayedOzone === 12) {
                return;
            }
        }
    }

    function incrementMonthDioxid() {
        for (let i = 1; i <= 12; i++) {
            if (props.monthDisplayedDioxid < 12) {
                props.setMonthDisplayedDioxid(props.monthDisplayedDioxid + 1);
            }
            if (props.monthDisplayedDioxid === 12) {
                return;
            }
        }
    }

    function decrementMonth() {
        for (let i = 1; i <= 12; i++) {
            if (props.monthDisplayed >= 12)
                props.setMonthDisplayed(props.monthDisplayed - 1);
            if (props.monthDisplayed === 1) {
                return;
            }
        }
    }

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
                fill: true,
                borderColor: 'rgb(220, 192, 192)',
                backgroundColor: 'rgba(220, 192, 192, 0.4)'
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
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
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
                fill: true,
                borderColor: 'rgb(162, 75, 192)',
                backgroundColor: 'rgba(162, 75, 192, 0.4)'
            }
        ]
    }

    for (let i = 0; i < nitrogenDioxidDatas.length; i++) {
        nitrogenDioxidAvg.push(nitrogenDioxidDatas[i].average);
        nitrogenDioxidLabelsStart.push(nitrogenDioxidDatas[i].start);
    }


    const nitrogenDioxidData = {
        labels: nitrogenDioxidLabelsStart,
        datasets: [
            {
                label: `Nitrogen Dioxide* average emissions for ${countryId}`,
                data: nitrogenDioxidAvg.map((item) => item),
                fill: true,
                borderColor: 'rgb(220, 70, 80)',
                backgroundColor: 'rgba(220, 70, 80, 0.4)',
            }
        ]
    }

    const optionsMethane = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: 1800,
                max: 2000
            }
        }
    }

    const optionsMonoxid = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: 0,
                max: 0.06
            }
        }
    }

    const optionsOzone = {
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'linear',
                min: 0.1,
                max: 0.25
            }
        }
    }

    const options = {
        maintainAspectRatio: false,
    }
    return (
        <main className='main-global'>
            <Countries />
            <h3>Early 2020 global stats for {countryId}</h3>
            <div className='main-charts'>
                <article className="canvas-container">
                    <div className="chart">
                        {typeOfChartMethane === 'line' && <Line data={methaneData} options={optionsMethane} className='chart__display' />}
                        {typeOfChartMethane === 'bar' && <Bar data={methaneData} options={optionsMethane} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartMethane('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartMethane('line') }} className='chart__choice'>Line</button>
                        <button onClick={decrementMonth} className='chart__choice'>Prev month</button>
                        <button onClick={incrementMonthMethane} className='chart__choice'>Next month</button>
                        {typeOfChartMonoxid === 'line' && <Line data={monoxidData} options={optionsMonoxid} className='chart__display' />}
                        {typeOfChartMonoxid === 'bar' && <Bar data={monoxidData} options={optionsMonoxid} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartMonoxid('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartMonoxid('line') }} className='chart__choice'>Line</button>
                        <button onClick={decrementMonth} className='chart__choice'>Prev month</button>
                        <button onClick={incrementMonthMonoxid} className='chart__choice'>Next month</button>
                    </div>
                    <div className="chart">
                        {typeOfChartOzone === 'line' && <Line data={ozoneData} options={optionsOzone} className='chart__display' />}
                        {typeOfChartOzone === 'bar' && <Bar data={ozoneData} options={optionsOzone} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartOzone('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartOzone('line') }} className='chart__choice'>Line</button>
                        <button onClick={decrementMonth} className='chart__choice'>Prev month</button>
                        <button onClick={incrementMonthOzone} className='chart__choice'>Next month</button>
                        {typeOfChartNitrogenDioxid === 'line' && <Line data={nitrogenDioxidData} options={options} className='chart__display' />}
                        {typeOfChartNitrogenDioxid === 'bar' && <Bar data={nitrogenDioxidData} options={options} className='chart__display' />}
                        <button onClick={() => { setTypeOfChartNitrogenDioxid('bar') }} className='chart__choice'>Bar</button>
                        <button onClick={() => { setTypeOfChartNitrogenDioxid('line') }} className='chart__choice'>Line</button>
                        <button onClick={decrementMonth} className='chart__choice'>Prev month</button>
                        <button onClick={incrementMonthDioxid} className='chart__choice'>Next month</button>
                    </div>
                </article>
            </div >
            <section className='description'>
                <div className="description__gaz">
                    <p className="methane">
                        Methane : {methaneDesc.description}
                    </p>
                    <p className="monoxid">
                        Carbon monoxid : {carbonMonoxidDesc.description}
                    </p>
                </div>
                <div className="description__gaz">
                    <p className="ozone">
                        Ozone : {ozoneDesc.description}
                    </p>
                    <p className="nitrogen">
                        Nitrogen Dioxid : {nitrogenDioxidDesc.description}
                    </p>
                </div>
            </section>
        </main >
    )
}

export default GlobalListGaz;
