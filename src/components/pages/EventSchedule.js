import React, { Component } from 'react';
import Footer from '../layout/Footer';
import HeaderDark from '../layout/HeaderDark';
import { Title, Paragraph, SmallTitle } from '../styles';

export default class EventSchedule extends Component {
    render() {
        return (
            <div>
                <HeaderDark />
                <div className="row tm-80">
                  <div className="large-12">
                    <Title>Tablå</Title>
                    <Paragraph>Här kan du se dem planerade livestreams som kommer att finna på Idrottskoll.se. <br/>
                    Intresserad av att lägga en beställning? Kontakta oss på info@idrottskoll.se eller använd förmuläret <a href="/inspelningsforfragan">här.</a></Paragraph>
                    <hr className="tm-40 bm-40" />
                  </div>
                  <div className="large-12">
                    <SmallTitle>Planerade livestreams</SmallTitle>
                    <Paragraph>Just nu finns det inga planerade livestreams.</Paragraph>
                  </div>
                </div>
                <Footer />
            </div>
        );
    }
}
