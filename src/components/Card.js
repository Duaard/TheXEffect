import React, { useState } from 'react';
import { Grid, Row } from './Grid';
import data from '../data/mock';

const Card = (props) => {
    // Declare state variables
    console.log(data);
    let rows = data.map((rows) => {
        return <Row data={rows} />;
    });

    return (
        <div>
            <h1>Card Title</h1>
            <Grid data={data} />
        </div>
    );
};

export default Card;
