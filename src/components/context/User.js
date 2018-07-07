import React from 'react';
import {
    IsSignedIn,
    SetLocalStorage,
    PostRequest,
    GetRequest,
    RemoveLocalStorageItem,
} from '../middleware/api-calls';

const UserContext = React.createContext({ isSignedIn: false });

export const UserConsumer = UserContext.Consumer;

/** Determen if a User is admin */
export const UserLevel = { admin: 100, normal: null };

export class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /** bool */
            isSignedIn: false,

            /** string */
            name: null,

            /** string */
            email: null,

            /** int */
            level: null,

            /** array */
            orders: [],

            /** string */
            error: null,
        };

        if (!this.state.isSignedIn) {
            this.signInOnMoutn();
        }
    }

    /**
     * Is used to sign in user on component mount if a token is present
     *
     * @return void
     */
    signInOnMoutn = async () => {
        const token = await IsSignedIn();
        this.getUser(token);
        return;
    };

    /**
     * @param string email
     * @param string password
     * @return string|void
     */
    signIn = async (email, password) => {
        if ('' === (email && password)) {
            await this.setErrorMessage('E-post och lösenord måste vara ifyllt');
            return;
        }

        const response = await PostRequest('login', { email, password });

        if (200 !== response.status) {
            await this.setErrorMessage('Fel e-post adress eller lösenord.');
            return;
        }

        const token = response.data.token.length > 0 ? `Bearer1 ${response.data.token}` : false;

        if (token) {
            SetLocalStorage('token', token);
        }

        const user = await this.getUser(token);

        if (!user) {
            await this.setErrorMessage('Det gick inte att logga in.');
            return;
        }
    };

    /**
     * @param string token
     * @return bool
     */
    getUser = async token => {
        if (!token) {
            await this.signOut();
            return false;
        }

        const {
            data: { email, level, name, order },
            status,
        } = await GetRequest('user', { headers: { Authorization: token } });

        if (200 !== status) {
            await this.signOut();
            return false;
        }

        await this.setState({ isSignedIn: true, name, email, level, orders: order });

        return true;
    };

    /**
     * @param email string
     * @param name string
     * @param password string
     * @param passwordConfirmation string
     * @return void
     */
    signUp = async (name, email, password, passwordConfirmation) => {
        if ('' === (email && name && password && passwordConfirmation)) {
            await this.setErrorMessage('Alla fält måste vara ifyllda.');
            return;
        }

        if (password !== passwordConfirmation) {
            await this.setErrorMessage('Lösenord stämmer inte överens');
            return;
        }

        const response = await PostRequest('register', {
            email,
            name,
            password,
            passwordConfirmation,
        });

        await this.setState({ signUpPassword: '', signUpPasswordConfirm: '' });

        if (200 !== response.status) {
            await this.setErrorMessage('Det gick inte att skapa ett konto.');
            return;
        }

        const token = response.data.token.length > 0 ? `Bearer1 ${response.data.token}` : false;

        if (token) {
            SetLocalStorage('token', token);
        }

        const user = await this.getUser(token);

        if (!user) {
            await this.setErrorMessage('Det gick inte att logga in den nya användaren.');
            return;
        }
    };

    /**
     * @return void
     */
    signOut = async () => {
        await RemoveLocalStorageItem('token');
        await this.setState({ isSignedIn: false });
        return;
    };

    /**
     * @param string message
     * @return void
     */
    setErrorMessage = message => {
        this.setState({ error: message });
        setTimeout(() => {
            this.setState({ error: null });
        }, 4000);
        return;
    };

    /**
     * @return bool
     */
    isAdmin = () => {
        if (this.state.isSignedIn && this.state.level === UserLevel.admin) {
            return true;
        }
        return false;
    };

    render() {
        return (
            <UserContext.Provider
                value={{
                    isSignedIn: this.state.isSignedIn,
                    name: this.state.name,
                    email: this.state.email,
                    level: this.state.level,
                    orders: this.state.orders,
                    error: this.state.error,
                    signIn: this.signIn,
                    signUp: this.signUp,
                    signOut: this.signOut,
                    isAdmin: this.isAdmin,
                }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
