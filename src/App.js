import React, { Component } from 'react';
import Router from './components/Router';
import { UserProvider } from './components/context/User';

export default class App extends Component {
    render() {
        return (
            <UserProvider>
                <Router />
            </UserProvider>
        );
    }
}
