import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default class EventSchedule extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Tablå</h1>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
