import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SignIn from '../account/SignIn';
import SignUp from '../account/SignUp';
import {
    IsSignedIn,
    RemoveLocalStorageItem,
    SetLocalStorage,
    PostRequest,
} from '../middleware/api-calls';
import { Button, Title, Label, Input, Link } from '../styles';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: IsSignedIn(),
            signInEmail: '',
            signInPassword: '',
            signUpName: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpPasswordConfirm: '',
        };
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
            email: this.state.signInEmail,
            password: this.state.signInPassword,
        });

        await this.setState({ signInPassword: '' });

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

    signUp = async () => {
        const response = await PostRequest('register', {
            email: this.state.signUpEmail,
            name: this.state.signUpName,
            password: this.state.signUpPassword,
            passwordConfirmation: this.state.signUpPasswordConfirm,
        });

        await this.setState({ signUpPassword: '', signUpPasswordConfirm: '' });

        if (200 !== response.status) {
            await this.setState({ error: 'Det gick inte att skapa ett konto.' });
            await setTimeout(() => {
                this.setState({ error: null });
            }, 3000);
            return;
        }

        await this.setState({ signUpName: '', signUpEmail: '' });

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

    renderAuthenticate = () => {
        return (
            <React.Fragment>
                <React.Fragment>
                    <SignIn
                        email={this.state.signInEmail}
                        password={this.state.signInPassword}
                        setUserEmail={email => this.setState({ signInEmail: email })}
                        setUserPassword={password => this.setState({ signInPassword: password })}
                        signIn={this.signIn}
                    />
                </React.Fragment>
                <React.Fragment>
                    <SignUp
                        name={this.state.signUpName}
                        email={this.state.signUpEmail}
                        password={this.state.signUpPassword}
                        passwordConfirm={this.state.signUpPasswordConfirm}
                        setUserName={name => this.setState({ signUpName: name })}
                        setUserEmail={email => this.setState({ signUpEmail: email })}
                        setUserPassword={password => this.setState({ signUpPassword: password })}
                        setUserPasswordConfirm={passwordConfirm =>
                            this.setState({ signUpPasswordConfirm: passwordConfirm })
                        }
                        signUp={this.signUp}
                    />
                </React.Fragment>
                <div>{this.state.error}</div>
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                <Header />
                <div className="row tm-40">
                    <div className="large-12">
                        <Title>
                            {this.state.isSignedIn ? '' : 'Logga in eller registrera konto'}
                        </Title>
                        <hr className="bm-40" />
                    </div>
                    {this.state.isSignedIn ? this.renderIsSignedIn() : this.renderAuthenticate()}
                </div>
                <Footer />
            </div>
        );
    }
}
