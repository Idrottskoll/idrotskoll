import React, { Component } from 'react';
import { GetRequest } from './components/middleware/api-calls.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }

    async componentWillMount() {
        const response = await GetRequest('rpstatus/lerumstk');
        this.setState({ status: response });
    }

    render() {
        return (
            <div className="container">
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
