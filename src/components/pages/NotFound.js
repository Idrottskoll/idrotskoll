import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-12">
                        <h1>404</h1>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
