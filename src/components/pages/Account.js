import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { IsSignedIn, RemoveLocalStorageItem, SetLocalStorage } from '../middleware/api-calls';
import { Button } from '../styles';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignedIn: IsSignedIn() };
    }

    signOut = async () => {
        await RemoveLocalStorageItem('token');
        return await this.setState({ isSignedIn: IsSignedIn() });
    };

    signIn = async () => {
        await SetLocalStorage('token', 'kejbrfjerb');
        return await this.setState({ isSignedIn: IsSignedIn() });
    };

    renderIsSignedIn = () => {
        return (
            <React.Fragment>
                <h1>Du är inloggad</h1>
                <Button onClick={() => this.signOut()}>Logga ut</Button>
            </React.Fragment>
        );
    };

    renderIsNotSignedIn = () => {
        return (
            <React.Fragment>
                <h1>Användarkonto</h1>
                <Button onClick={() => this.signIn()}>Logga in</Button>
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-12">
                        {this.state.isSignedIn
                            ? this.renderIsSignedIn()
                            : this.renderIsNotSignedIn()}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
