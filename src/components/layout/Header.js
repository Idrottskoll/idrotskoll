import React from 'react';
import { Link } from '../styles';
import { UserConsumer } from '../context/User';
import Alert from './Alert';

const Menu = props => (
    <div className="menu">
        <div className="large-6">
            <a href="/">
                <img
                    className="logo"
                    src={
                        props.theame === 'dark'
                            ? require('../../images/icon-dark.png')
                            : require('../../images/icon.png')
                    }
                    alt="Idrottskoll logotyp"
                />
            </a>
        </div>
        <div className="large-6 inline display-right">
            <Link className="lm-20" href="/tabla">
                Tablå
            </Link>
            <Link className="lm-20" href="/inspelningsforfragan">
                Lägg inspelningförfrågan
            </Link>
            <Link className="lm-20 bold" href="/konto">
                {props.isSignedIn ? props.name : 'Konto'}
            </Link>
            {props.isSignedIn ? (
                <Link className="lm-20" onClick={() => props.signOut()}>
                    Logga ut
                </Link>
            ) : null}
        </div>
    </div>
);

const Header = props => (
    <UserConsumer>
        {user => (
            <React.Fragment>
                {user.alert ? <Alert message={user.alert.message} type={user.alert.type} /> : null}
                {props.theame === 'dark' ? (
                    <div className="menu-container row dark">
                        <Menu
                            isSignedIn={user.isSignedIn}
                            name={user.name}
                            signOut={user.signOut}
                            theame={props.theame}
                        />
                    </div>
                ) : (
                    <div className="menu-container row">
                        <Menu
                            isSignedIn={user.isSignedIn}
                            name={user.name}
                            signOut={user.signOut}
                            theame={props.theame}
                        />
                    </div>
                )}
            </React.Fragment>
        )}
    </UserConsumer>
);

export default Header;
