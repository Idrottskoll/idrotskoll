import React, { Component } from 'react';
import { Faq } from './components/middleware/text';
import StreamScheduleContainer from './components/streamSchedule/StreamScheduleContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <StreamScheduleContainer />
            </div>
        );
    }
}
