import React, { Component } from 'react';
import { Label, Input, TextArea, Button, Title, Paragraph, Link } from '../styles';
import Footer from '../layout/Footer';
import HeaderDark from '../layout/HeaderDark';

export default class RequestRecording extends Component {
    render() {
        return (
            <div>
                <HeaderDark />
                <div className="row tm-80">
                    <div className="large-12">
                        <Title>Lägg inspelningsförfrågan</Title>
                        <hr className="bm-40" />
                    </div>
                    <div className="large-6 rp-20">
                      <Label>Ämne*</Label>
                      <Input type="text" placeholder="Ex. installera kameror, livestreaming" />
                      <Label>Namn*</Label>
                      {/* error = add class "error" to input */}
                      <Input type="text" placeholder="Ditt för- och efternamn" className="error" />
                      <Label>Mail*</Label>
                      <Input type="text" placeholder="Din mailadress" />
                      <Label>Din klubb</Label>
                      <Input type="text" placeholder="Namn på klubben det handlar om" />
                    </div>
                    <div className="large-6">
                    <Label>Meddelande*</Label>
                    <TextArea rows="3" columns="3" placeholder="Ditt meddelande..." className="bm-20" />
                    <div className="inline bm-20">
                      <div className="check rm-20">
                        <Input id="checkbox" type="checkbox" />
                      </div>
                      <Label>Jag godkänner att Idrottskoll håller mina uppgifter enligt deras <Link>Privacy Policies.</Link></Label>
                    </div>
                    <Button>Skicka meddelande</Button>
                    {/* error = show this message below */}
                    <Paragraph>Uppgifterna stämde inte. Dubbelkolla alla fält med * är ifyllda och försök igen.</Paragraph>
                    {/* success = show this message below and reset all inputs */}
                    {/* <Paragraph>Tack för ditt meddelande! Vi hör av oss så fort vi kan.</Paragraph> */}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
