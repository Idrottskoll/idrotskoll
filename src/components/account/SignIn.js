import React from 'react';
import { Input, Button, Label } from '../styles';
import { UserConsumer } from '../context/User';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            forgotPassword: false,
        };
    }

    renderSignInForm = props => {
        return (
            <React.Fragment>
                <Label>Email</Label>
                <Input
                    value={this.state.email}
                    placeholder="Din email"
                    type="email"
                    required
                    onChange={e => this.setState({ email: e.target.value })}
                />

                <Label>Lösenord</Label>
                <Input
                    value={this.state.password}
                    type="password"
                    placeholder="*********"
                    required
                    onChange={e => this.setState({ password: e.target.value })}
                />

                <Button onClick={() => props.signIn(this.state.email, this.state.password)}>
                    Logga in
                </Button>
            </React.Fragment>
        );
    };

    renderForgotPasswordForm = props => {
        return (
            <React.Fragment>
                <Label>Email</Label>
                <Input
                    value={this.state.email}
                    placeholder="Din email"
                    type="email"
                    required
                    onChange={e => this.setState({ email: e.target.value })}
                />

                <Button
                    onClick={() =>
                        props.forgotPassword(this.state.email) |
                        this.setState({ email: '', forgotPassword: false })
                    }>
                    Hämta lösenord
                </Button>
            </React.Fragment>
        );
    };

    render() {
        return (
            <UserConsumer>
                {user => (
                    <div className="large-6 rp-20">
                        {this.state.forgotPassword
                            ? this.renderForgotPasswordForm(user)
                            : this.renderSignInForm(user)}

                        <Button
                            onClick={() =>
                                this.setState({ forgotPassword: !this.state.forgotPassword })
                            }>
                            {this.state.forgotPassword ? 'Logga in' : 'Glömt lösenord'}
                        </Button>
                    </div>
                )}
            </UserConsumer>
        );
    }
}
