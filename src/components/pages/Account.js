import React, { Component } from 'react';
import Footer from '../layout/Footer';
import HeaderDark from '../layout/HeaderDark';
import SignIn from '../account/SignIn';
import SignUp from '../account/SignUp';
import SignedIn from '../account/SignedIn';
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

    /**
     * @param string message
     * @return void
     */
    setErrorMessage = message => {
        this.setState({ error: message });
        setTimeout(() => {
            this.setState({ error: null });
        }, 4000);
        return;
    };

    /**
     * @return bool
     */
    signOut = async () => {
        await RemoveLocalStorageItem('token');
        return await this.setState({ isSignedIn: IsSignedIn() });
    };

    /**
     * @return bool
     */
    signIn = async () => {
        if (this.state.signInEmail === '' || this.state.signInPassword === '') {
            return await this.setErrorMessage('E-post och lösenord måste vara ifyllt');
        }

        const response = await PostRequest('login', {
            email: this.state.signInEmail,
            password: this.state.signInPassword,
        });

        await this.setState({ signInPassword: '' });

        if (200 !== response.status) {
            return await this.setErrorMessage('Fel e-post adress eller lösenord.');
        }

        await SetLocalStorage('token', response.data.token);

        return await this.setState({ isSignedIn: IsSignedIn() });
    };

    /**
     * @return bool
     */
    signUp = async () => {
        if (
            this.state.signUpEmail === '' ||
            this.state.signUpName === '' ||
            this.state.signUpPassword === '' ||
            this.state.signUpPasswordConfirm === ''
        ) {
            return await this.setErrorMessage('Alla fält måste vara ifyllda.');
        }

        const response = await PostRequest('register', {
            email: this.state.signUpEmail,
            name: this.state.signUpName,
            password: this.state.signUpPassword,
            passwordConfirmation: this.state.signUpPasswordConfirm,
        });

        await this.setState({ signUpPassword: '', signUpPasswordConfirm: '' });

        if (200 !== response.status) {
            return await this.setErrorMessage('Det gick inte att skapa ett konto.');
        }

        await this.setState({ signUpName: '', signUpEmail: '' });

        await SetLocalStorage('token', response.data.token);

        return await this.setState({ isSignedIn: IsSignedIn() });
    };

    /**
     * @return component
     */
    renderIsSignedIn = () => {
        return (
            <React.Fragment>
              <SignedIn />
              {console.log(this.state.signUpName)}
                {/*<Button onClick={() => this.signOut()}>Logga ut</Button>*/}
            </React.Fragment>
        );
    };

    /**
     * @return component
     */
    renderAuthenticate = () => {
        return (
            <React.Fragment>
                <div className="large-12">{this.state.error}</div>
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
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                <HeaderDark />
                <div className="row tm-40">
                    <div className="large-12">
                        <Title>
                            {this.state.isSignedIn ? '' : 'Logga in eller registrera konto'}
                        </Title>

                    </div>
                    {this.state.isSignedIn ? this.renderIsSignedIn() : this.renderAuthenticate()}
                </div>
                <Footer />
            </div>
        );
    }
}
