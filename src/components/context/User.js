import React from 'react';
import {
    IsSignedIn,
    SetLocalStorage,
    PostRequest,
    GetRequest,
    RemoveLocalStorageItem,
} from '../middleware/api-calls';
import { messageType } from '../layout/Alert.js';

const UserContext = React.createContext({ isSignedIn: false });

export const UserConsumer = UserContext.Consumer;

/** Determen if a User is admin */
export const UserLevel = { admin: 50, normal: 10 };

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
            alert: false,
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
            await this.setUserAlert('E-post och lösenord måste vara ifyllt', messageType.error);
            return;
        }

        const response = await PostRequest('login', { email, password });

        if (200 !== response.status) {
            await this.setUserAlert('Fel e-post adress eller lösenord.', messageType.error);
            return;
        }

        const token = response.data.token.length > 0 ? `Bearer1 ${response.data.token}` : false;

        if (token) {
            SetLocalStorage('token', token);
        }

        const user = await this.getUser(token);

        if (!user) {
            await this.setUserAlert('Det gick inte att logga in.', messageType.error);
            return;
        }

        await this.setUserAlert(`Välkommen tillbaka ${this.state.name}!`, messageType.success);
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
            await this.setUserAlert('Alla fält måste vara ifyllda.', messageType.error);
            return;
        }

        if (password !== passwordConfirmation) {
            await this.setUserAlert('Lösenord stämmer inte överens', messageType.error);
            return;
        }

        const response = await PostRequest('register', {
            email,
            name,
            password,
            passwordConfirmation,
        });

        if (200 !== response.status) {
            await this.setUserAlert('Det gick inte att skapa ett konto.', messageType.error);
            return;
        }

        const token = response.data.token.length > 0 ? `Bearer1 ${response.data.token}` : false;

        if (token) {
            SetLocalStorage('token', token);
        }

        const user = await this.getUser(token);

        if (!user) {
            await this.setUserAlert(
                'Det gick inte att logga in den nya användaren.',
                messageType.error,
            );
            return;
        }
        await this.setUserAlert(`Välkommen tillbaka ${this.state.name}!`, messageType.success);
    };

    /**
     * @param string email
     * @return void
     */
    forgotPassword = async email => {
        if ('' === email) {
            await this.setUserAlert('Du måste fylla i en e-post adress.', messageType.error);
            return;
        }

        const {
            data: { message },
            status,
        } = await PostRequest('account/forgot', { email });

        if (200 !== status) {
            await this.setUserAlert(
                'Det gick inte att återställa ditt lösenord',
                messageType.error,
            );
            return;
        }

        await this.setUserAlert(message, messageType.success);
        return;
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
    setUserAlert = (message, type) => {
        this.setState({ alert: { message: message, type: type } });
        setTimeout(() => {
            this.setState({ alert: false });
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
                    alert: this.state.alert,
                    signIn: this.signIn,
                    signUp: this.signUp,
                    forgotPassword: this.forgotPassword,
                    signOut: this.signOut,
                    isAdmin: this.isAdmin,
                }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
