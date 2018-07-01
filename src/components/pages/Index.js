import React, { Component } from 'react';
import { Faq } from '../middleware/text';
import { Button, Label, Input, TextArea, Title, Paragraph, Link, SmallTitle } from '../styles';
import StreamScheduleContainer from '../streamSchedule/StreamScheduleContainer';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Hero from '../Hero';
import UspContainer from '../Usp';
import HowDoesItWork from '../HowDoesItWork';

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Hero />
                <UspContainer />
                <HowDoesItWork />
                <Footer />    
            </React.Fragment>
        );
    }
}
