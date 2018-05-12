import React, { Component } from 'react';
import { Faq } from './components/middleware/text';
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  border: 1px solid #202020;
  color: #202020;
  font-size: 18px;
  font-family: 'Renner-Medium';
  padding: 15px 27px 15px 27px;
  transition: all 0.3s;
  &:hover {
    background: #202020;
    color: white;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-family: 'Renner-Book';
  color: #202020;
  line-height: 23px;
`;

const Input = styled.input`
  font-size: 18px;
  font-family: 'Renner-Book';
  border: 1px solid #202020;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border: 1px solid blue;
    box-shadow: none;
  }
  &::Placeholder {
    color: #7D7D7D;
  }
`;

const TextArea = styled.textarea`
  font-size: 18px;
  font-family: 'Renner-Book';
  border: 1px solid #202020;
  padding: 20px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border: 1px solid blue;
    box-shadow: none;
  }
  &::Placeholder {
    color: #7D7D7D;
  }
`;

const Title = styled.h1`
  font-family: 'Renner-Book';
  font-size: 48px;
`;

const Paragraph = styled.p`
  font-family: 'Renner-Book';
  font-size: 18px;
  line-height: 23px;
`;

const Link = styled.a`
  font-family: 'Renner-Book';
  font-size: 18px;
  text-decoration: underline;
  transition: all 0.3s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const SmallTitle = styled.h2`
  font-family: 'Renner-Book';
  font-size: 18px;
  text-transform: uppercase;
`;




export default class App extends Component {
    constructor(props) {
        super(props);
        // this.state = { status: null, text: Kaninkuppen };
    }


    render() {
        return (
            <div>
                <Button>Button</Button> <br/><br/>
                <Label>Label</Label> <br/><br/>
                <Input placeholder="Placeholder" /> <br/><br/>
                <TextArea placeholder="Placeholder"></TextArea> <br/><br/>
                <Title>Title</Title>
                <Paragraph>Paragraph</Paragraph>
                <Link>Link</Link>
                <SmallTitle>Small title</SmallTitle>
            </div>
        );
    }
}
