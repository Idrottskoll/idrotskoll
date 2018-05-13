import React, { Component } from 'react';
import { Faq } from './components/middleware/text';
import StreamScheduleContainer from './components/streamSchedule/StreamScheduleContainer';

export default class App extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-xs-6">
                <Button>Button</Button> <br/><br/>
                <Label>Label</Label> <br/><br/>
                <Input placeholder="Placeholder" /> <br/><br/>
                <TextArea placeholder="Placeholder"></TextArea> <br/><br/>
                <Title>Title</Title>
                <Paragraph>Paragraph</Paragraph>
                <Link>Link</Link>
                <SmallTitle>Small title</SmallTitle>
              </div>
            </div>
        );
    }
}
