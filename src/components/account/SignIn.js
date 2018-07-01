import React from 'react';
import { Input, Button, Label } from '../styles';

const SignIn = props => (
    <div className="large-6 rp-20">
        <Label>Email</Label>
        <Input
            value={props.email}
            placeholder="Din email"
            type="email"
            required
            onChange={e => props.setUserEmail(e.target.value)}
        />

        <Label>Lösenord</Label>
        <Input
            value={props.password}
            type="password"
            placeholder="*********"
            required
            onChange={e => props.setUserPassword(e.target.value)}
        />

        <Button onClick={props.signIn}>Logga in</Button>
    </div>
);

export default SignIn;
