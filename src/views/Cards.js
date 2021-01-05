import React from 'react';
import Card from '../components/Card';

const api = 'http://localhost:3000';

class CardsView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const cFetch = async function () {
            let res = await fetch(api + '/cards');
            let data = await res.json();
            console.log(data);
        };
        cFetch();
    }

    render() {
        return <h1>Hello world!</h1>;
    }
}

export default CardsView;
