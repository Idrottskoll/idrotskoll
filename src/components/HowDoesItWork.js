import React, { Component } from 'react';
import { Title, Paragraph, Link, SmallTitle } from './styles';
import { HowDoesItWorks } from './middleware/text';
import { Seperator } from './seperator';

export default class HowDoesItWork extends Component {
  constructor(props) {
    super(props);
    this.state = { text: HowDoesItWorks };
   }
    render() {
        return (
          <div className="row hdiw">
            <div className="large-6">
              <Title>{this.state.text.title}</Title>
              <Paragraph>{this.state.text.body}</Paragraph>
            </div>
            <div className="large-12 inline">
              <div className="large-4">
                <SmallTitle>{this.state.text.private.title}</SmallTitle>
                <Paragraph>{this.state.text.private.body}</Paragraph>
              </div>
              <div className="large-4">
                <SmallTitle>{this.state.text.club.title}</SmallTitle>
                <Paragraph>{this.state.text.club.body}</Paragraph>
              </div>
              <div className="large-4">
                <SmallTitle>{this.state.text.new_club.title}</SmallTitle>
                <Paragraph>{this.state.text.new_club.body}</Paragraph>
              </div>
            </div>
            <Seperator></Seperator>
          </div>
        );
    }
}
