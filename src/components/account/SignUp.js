import React from 'react';
import { Input, Button, Label, Link } from '../styles';
import { UserConsumer } from '../context/User';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
        };
    }

    render() {
        return (
            <UserConsumer>
                {user => (
                    <div className="large-6">
                        <Label>Namn*</Label>
                        <Input
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            placeholder="För- och efternamn"
                            type="text"
                        />

                        <Label>Email</Label>
                        <Input
                            value={this.state.email}
                            placeholder="Din email"
                            type="email"
                            required
                            onChange={e => this.setState({ email: e.target.value })}
                        />

                        {/* <Label>Aktiv sport</Label>
                            <Input placeholder="Vilken sport är du aktiv i?" type="text" />
                            <Label>Klubb/förening</Label>
                        <Input placeholder="Vilken klubb/förening är du aktiv i?" type="text" /> */}

                        <Label>Lösenord</Label>
                        <Input
                            value={this.state.password}
                            type="password"
                            placeholder="*********"
                            required
                            onChange={e => this.setState({ password: e.target.value })}
                        />

                        <Label>Bekräfta lösenord*</Label>
                        <Input
                            onChange={e => this.setState({ passwordConfirm: e.target.value })}
                            value={this.state.passwordConfirm}
                            placeholder="*********"
                            type="password"
                        />

                        <div className="inline bm-20">
                            <div className="check rm-20">
                                <Input id="checkbox" type="checkbox" />
                            </div>
                            <Label>
                                Jag godkänner att Idrottskoll håller mina uppgifter enligt deras{' '}
                                <Link>Privacy Policies.</Link>
                            </Label>
                        </div>

                        <Button
                            onClick={() =>
                                user.signUp(
                                    this.state.name,
                                    this.state.email,
                                    this.state.password,
                                    this.state.passwordConfirm,
                                )
                            }>
                            Registrera konto
                        </Button>
                    </div>
                )}
            </UserConsumer>
        );
    }
}
