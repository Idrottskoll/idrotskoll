import React from 'react';
import { Link } from '../styles';
import { UserConsumer } from '../context/User';
import Alert from './Alert';

const HeaderDark = props => (
    <UserConsumer>
        {user => (
            <React.Fragment>
                {user.alert ? <Alert message={user.alert.message} type={user.alert.type} /> : null}
                <div className="menu-container row dark">
                    <div className="menu">
                        <div className="large-6">
                            <a href="/">
                                <img
                                    className="logo"
                                    src={require('../../images/icon-dark.png')}
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
                                {user.isSignedIn ? user.name : 'Konto'}
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )}
    </UserConsumer>
);

export default HeaderDark;
