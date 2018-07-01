import React from 'react';
import { Input, Button, Label, Link } from '../styles';

const SignUp = props => (
    <div className="large-6">
        <Label>Namn*</Label>
        <Input
            value={props.name}
            onChange={e => props.setUserName(e.target.value)}
            placeholder="För- och efternamn"
            type="text"
        />

        <Label>Email*</Label>
        <Input
            onChange={e => props.setUserEmail(e.target.value)}
            value={props.email}
            placeholder="Din email"
            type="email"
        />

        {/* <Label>Aktiv sport</Label>
            <Input placeholder="Vilken sport är du aktiv i?" type="text" />
            <Label>Klubb/förening</Label>
        <Input placeholder="Vilken klubb/förening är du aktiv i?" type="text" /> */}

        <Label>Sätt ett lösenord*</Label>
        <Input
            onChange={e => props.setUserPassword(e.target.value)}
            value={props.password}
            placeholder="*********"
            type="password"
        />

        <Label>Bekräfta lösenord*</Label>
        <Input
            onChange={e => props.setUserPasswordConfirm(e.target.value)}
            value={props.passwordConfirm}
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

        <Button onClick={props.signUp}>Registrera konto</Button>
    </div>
);

export default SignUp;
