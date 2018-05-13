import React, { Component } from 'react';
import { StreamScheduleCard } from './streamScheduleCard';

export default class StreamScheduleContainer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-4">
                    <StreamScheduleCard title="Bana 1" />
                </div>
                <div className="col-xs-4">
                    <StreamScheduleCard title="Bana 2" />
                </div>
                <div className="col-xs-4">
                    <StreamScheduleCard title="Bana 3" />
                </div>
            </div>
        );
    }
}
