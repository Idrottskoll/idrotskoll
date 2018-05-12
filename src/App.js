import React, { Component } from 'react';
import { GetRequest } from './components/middleware/api-calls.js';
import { Faq } from './components/middleware/text';

export default class App extends Component {
    constructor(props) {
        super(props);
        // this.state = { status: null, text: Kaninkuppen };
    }

    async componentWillMount() {
        const response = await GetRequest('rpstatus/lerumstk');
        this.setState({ status: response });
    }

    render() {
        return (
            <div className="container">
                {Faq.question.body}
                <button
                    onClick={() =>
                        alert(
                            `Lerums TK status: ${this.state.status.statusText} ${
                                this.state.status.status
                            }`
                        )
                    }
                >
                    Click me
                </button>
            </div>
        );
    }
}
