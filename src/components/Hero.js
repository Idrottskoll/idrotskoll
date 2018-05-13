import React, { Component } from 'react';
import { Title, Paragraph, Link } from './styles';
import { Kaninkuppen } from './middleware/text';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { text: Kaninkuppen };
   }
    render() {
        return (
          <div className="hero">
            <div className="row ">
              <div className="large-5 color-white z">
                <Title>{this.state.text.title}</Title>
                <hr />
                <div className="inline">
                  <div className="place inline"><Paragraph>Landala squash center, Göteborg</Paragraph></div>
                  <div className="date inline"><Paragraph>26-28 maj</Paragraph></div>
                </div>
                <Paragraph>{this.state.text.body}</Paragraph>
                <Link className="color-white" href="#">Läs mer om kaninkuppen</Link>
              </div>
            </div>
            <div className="overlay-black"></div>
          </div>
        );
    }
}
