import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SignIn from '../account/SignIn';
import SignUp from '../account/SignUp';
import SignedIn from '../account/SignedIn';
import { UserConsumer } from '../context/User';
import { Title } from '../styles';

const Account = props => (
    <UserConsumer>
        {user => (
            <React.Fragment>
                <Header theame="dark" />
                <div className="row tm-80">
                    <div className="large-12">
                        <Title>
                            {user.isSignedIn
                                ? `Du är inloggad som: ${user.name}`
                                : 'Logga in eller registrera konto'}
                        </Title>
                    </div>

                    {user.isSignedIn ? <SignedIn signOut={user.signOut} /> : <Authenticate />}
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
