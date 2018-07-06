import React, { Component } from 'react';
import Footer from '../layout/Footer';
import HeaderDark from '../layout/HeaderDark';
import SignIn from '../account/SignIn';
import SignUp from '../account/SignUp';
//import SignedIn from '../account/SignedIn';
import { UserConsumer } from '../context/User';
import { Title, Button } from '../styles';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            signUpName: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpPasswordConfirm: '',
        };
    }

    /**
     * @return component
     */
    renderIsSignedIn = () => {
        return (
            <UserConsumer>
                {user => (
                    <React.Fragment>
                        {/* <h1>{`Välkommen ${user.name}`}</h1> */}
                        {/* <SignedIn /> */}

                        <Button onClick={() => user.signOut()}>Logga ut</Button>
                    </React.Fragment>
                )}
            </UserConsumer>
        );
    };

    /**
     * @return component
     */
    renderAuthenticate = () => {
        return (
            <UserConsumer>
                {user => (
                    <React.Fragment>
                        <SignIn
                            email={this.state.signInEmail}
                            password={this.state.signInPassword}
                            setUserEmail={email => this.setState({ signInEmail: email })}
                            setUserPassword={password =>
                                this.setState({ signInPassword: password })
                            }
                            signIn={() =>
                                user.signIn(this.state.signInEmail, this.state.signInPassword)
                            }
                        />

                        <SignUp
                            name={this.state.signUpName}
                            email={this.state.signUpEmail}
                            password={this.state.signUpPassword}
                            passwordConfirm={this.state.signUpPasswordConfirm}
                            setUserName={name => this.setState({ signUpName: name })}
                            setUserEmail={email => this.setState({ signUpEmail: email })}
                            setUserPassword={password =>
                                this.setState({ signUpPassword: password })
                            }
                            setUserPasswordConfirm={passwordConfirm =>
                                this.setState({ signUpPasswordConfirm: passwordConfirm })
                            }
                            signUp={() =>
                                user.signUp(
                                    this.state.signUpEmail,
                                    this.state.signUpName,
                                    this.state.signUpPassword,
                                    this.state.signUpPasswordConfirm,
                                )
                            }
                        />
                    </React.Fragment>
                )}
            </UserConsumer>
        );
    };

    render() {
        return (
            <UserConsumer>
                {user => (
                    <React.Fragment>
                        <HeaderDark />
                        <div className="row tm-40">
                            <div className="large-12">
                                <Title>
                                    {user.isSignedIn
                                        ? `Välkommen ${user.name}`
                                        : 'Logga in eller registrera konto'}
                                </Title>
                            </div>
                            <div className="large-12">{user.error}</div>
                            {user.isSignedIn ? this.renderIsSignedIn() : this.renderAuthenticate()}
                        </div>
                        <Footer />
                    </React.Fragment>
                )}
            </UserConsumer>
        );
    }
}
