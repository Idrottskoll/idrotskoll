import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SignIn from '../account/SignIn';
import {
    IsSignedIn,
    RemoveLocalStorageItem,
    SetLocalStorage,
    PostRequest,
} from '../middleware/api-calls';
import { Button, Title } from '../styles';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignedIn: IsSignedIn(), userEmail: null, userPassword: null };
    }

    signOut = async () => {
        await RemoveLocalStorageItem('token');
        return await this.setState({ isSignedIn: IsSignedIn() });
    };

    signIn = async () => {
        if (this.state.isSignedIn) {
            return;
        }

        const response = await PostRequest('login', {
            email: this.state.userEmail,
            password: this.state.userPassword,
        });

        await this.setState({ userPassword: '' });

        if (200 !== response.status) {
            await this.setState({ error: 'Fel e-post adress eller lösenord.' });
            await setTimeout(() => {
                this.setState({ error: null });
            }, 3000);
            return;
        }

        await SetLocalStorage('token', response.data.token);
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
            <div className="col-xs-12">
                <SignIn
                    email={this.state.userEmail}
                    password={this.state.userPassword}
                    setUserEmail={email => this.setState({ userEmail: email })}
                    setUserPassword={password => this.setState({ userPassword: password })}
                    signIn={this.signIn}
                />
                <div>{this.state.error}</div>
            </div>
        );
    };

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="large-12">
                        <Title>Logga in eller registrera konto</Title>
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
