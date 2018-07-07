import React from 'react';
import { Input, Button, Label } from '../styles';
import { UserConsumer } from '../context/User';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        return (
            <UserConsumer>
                {user => (
                    <div className="large-6 rp-20">
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

                        <Button onClick={() => user.signIn(this.state.email, this.state.password)}>
                            Logga in
                        </Button>
                    </div>
                )}
            </UserConsumer>
        );
    }
}
