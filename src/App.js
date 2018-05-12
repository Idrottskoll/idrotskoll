import React, { Component } from 'react';
import { Text } from './components/middleware/text';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignedIn: null, text: Text };
    }

    render() {
        return (
            <div className="container">
                {this.state.text.title}
                <button onClick={() => alert(this.state.isSignedIn)}>Click me</button>
            </div>
        );
    }
}
