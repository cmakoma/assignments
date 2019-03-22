import React, { Component } from 'react';
import Form from "./Form"
class Catering extends Component {
    render() {
        return (
            <>
            <div>
            <h1>Let us do the work.</h1>
            <p>From 10 plates to 1,000, we've got you covered,with delicious food that will impress.
                Work brunches, corporate parties, wedding and more can all be handled beautifully by our catering team.
            </p>
            </div>
            <div>
                <Form />
            </div>
            </>

        );
    }
}

export default Catering;