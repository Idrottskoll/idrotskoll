import React, { Component } from 'react';
import { Title, Paragraph, Link, SmallTitle } from './styles';
import { Usp } from './middleware/text';
import { Seperator } from './seperator';

export default class UspContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: Usp };
   }
    render() {
        return (
          <div className="row usp">
            <div className="large-6">
              <Title>{this.state.text.title}</Title>
              <Paragraph>{this.state.text.body}</Paragraph>
              <Link href="#">Skapa ett konto hos Idrottskoll</Link>
            </div>
            <div className="large-12 inline tm-40">
              <div className="large-4">
                <img className="usp-img" src={require('../images/usp1.png')} />
                <SmallTitle>{this.state.text.usp_one.title}</SmallTitle>
                <Paragraph>{this.state.text.usp_one.body}</Paragraph>
              </div>
              <div className="large-4">
                <img className="usp-img" src={require('../images/usp2.png')} />
                <SmallTitle>{this.state.text.usp_two.title}</SmallTitle>
                <Paragraph>{this.state.text.usp_two.body}</Paragraph>
              </div>
              <div className="large-4">
                <img className="usp-img" src={require('../images/usp3.png')} />
                <SmallTitle>{this.state.text.usp_three.title}</SmallTitle>
                <Paragraph>{this.state.text.usp_three.body}</Paragraph>
              </div>
            </div>
            <Seperator></Seperator>
          </div>
        );
    }
}
