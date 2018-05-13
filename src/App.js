import React, { Component } from 'react';
import { Faq } from './components/middleware/text';
import {
    Button,
    Label,
    Input,
    TextArea,
    Title,
    Paragraph,
    Link,
    SmallTitle
} from './components/styles';
import StreamScheduleContainer from './components/streamSchedule/StreamScheduleContainer';
import Footer from './components/layout/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Footer></Footer>
            </div>
          );
    }
}
