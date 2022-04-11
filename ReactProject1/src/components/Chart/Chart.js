import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    // max() wants an array, so we pull out all the elements 
    // from the array with a spread operator ...

    return (
    <div className="chart">
        {props.dataPoints.map(dataPoint => (
        <ChartBar 
            key={dataPoint.label}
            // key must have a unique identifier
            // .label works, some cases you might use .id
            value ={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label}
            />
            ))}
    </div>
    );
};

export default Chart;