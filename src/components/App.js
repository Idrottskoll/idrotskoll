import React, { Component } from 'react';
import { Faq } from './middleware/text';
import { Button, Label, Input, TextArea, Title, Paragraph, Link, SmallTitle } from './styles';
import StreamScheduleContainer from './streamSchedule/StreamScheduleContainer';
import Footer from './layout/Footer';
import Header from './layout/Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-12">
                        <Button>Button</Button> <br />
                        <br />
                        <Label>Label</Label> <br />
                        <br />
                        <Input placeholder="Placeholder" /> <br />
                        <br />
                        <TextArea placeholder="Placeholder" /> <br />
                        <br />
                        <Title>Title</Title>
                        <Paragraph>Paragraph</Paragraph>
                        <Link>Link</Link>
                        <SmallTitle>Small title</SmallTitle>
                    </div>
                </div>
                <StreamScheduleContainer />
                <Footer />
            </div>
        );
    }
}
