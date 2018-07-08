import React from 'react';
import Footer from '../layout/Footer';
import HeaderDark from '../layout/HeaderDark';
import SignIn from '../account/SignIn';
import SignUp from '../account/SignUp';
import SignedIn from '../account/SignedIn';
import { UserConsumer } from '../context/User';
import { Title, Button, Paragraph } from '../styles';

const Account = props => (
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

                    {user.isSignedIn ? <SignedIn signOut={user.signOut} /> : <Authenticate />}
                    <Paragraph>{user.error}</Paragraph>
                </div>
                <Footer />
            </React.Fragment>
        )}
    </UserConsumer>
);

export default Account;

const Authenticate = props => (
    <React.Fragment>
        <SignIn />
        <SignUp />
    </React.Fragment>
);
