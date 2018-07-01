import React from 'react';
import { Input, Button } from '../styles';

const SignIn = props => (
    <React.Fragment>
        <Input
            value={props.email}
            type="email"
            required
            onChange={e => props.setUserEmail(e.target.value)}
        />
        <Input
            value={props.password}
            type="password"
            required
            onChange={e => props.setUserPassword(e.target.value)}
        />
        <Button onClick={props.signIn}>Logga in</Button>
    </React.Fragment>
);

export default SignIn;
