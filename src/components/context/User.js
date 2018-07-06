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

export class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            isSignedIn: false,
            error: null,
        };
        this.signInOnMoutn();
    }

    /**
     * Is used to sign in user on component mount if a token is present
     *
     * @return User
     */
    signInOnMoutn = async () => {
        const token = await IsSignedIn();
        if (!token) {
            return;
        }
        await this.setUser(token);
    };

    signIn = async (email, password) => {
        if (email === '' || password === '') {
            return await this.setErrorMessage('E-post och lösenord måste vara ifyllt');
        }

        const response = await PostRequest('login', {
            email,
            password,
        });

        if (200 !== response.status) {
            return await this.setErrorMessage('Fel e-post adress eller lösenord.');
        }

        await SetLocalStorage('token', `Bearer1 ${response.data.token}`);

        const user = await this.setUser(`Bearer1 ${response.data.token}`);

        if (!user) {
            return await this.setErrorMessage('Det gick inte att logga in.');
        }
    };

    setUser = async token => {
        if (token.length < 10) {
            await this.signOut();
            return false;
        }

        const response = await GetRequest('user', { headers: { Authorization: token } });

        if (200 !== response.status) {
            await this.signOut();
            return false;
        }

        await this.setState({
            isSignedIn: true,
            name: response.data.name,
            email: response.data.email,
        });

        return true;
    };

    /**
     * @return bool
     */
    signUp = async (email, name, password, passwordConfirmation) => {
        if (email === '' || name === '' || password === '' || passwordConfirmation === '') {
            return await this.setErrorMessage('Alla fält måste vara ifyllda.');
        }

        if (password !== passwordConfirmation) {
            return await this.setErrorMessage('Lösenord stämmer inte överens');
        }

        const response = await PostRequest('register', {
            email,
            name,
            password,
            passwordConfirmation,
        });

        await this.setState({ signUpPassword: '', signUpPasswordConfirm: '' });

        if (200 !== response.status) {
            return await this.setErrorMessage('Det gick inte att skapa ett konto.');
        }

        //await this.setState({ signUpName: '', signUpEmail: '' });

        await SetLocalStorage('token', `Bearer1 ${response.data.token}`);

        const user = await this.setUser(`Bearer1 ${response.data.token}`);

        if (!user) {
            return await this.setErrorMessage('Det gick inte att logga in den nya användaren.');
        }
    };

    /**
     * @return bool
     */
    signOut = async () => {
        await RemoveLocalStorageItem('token');
        return await this.setState({ isSignedIn: false });
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

    render() {
        return (
            <UserContext.Provider
                value={{
                    isSignedIn: this.state.isSignedIn,
                    name: this.state.name,
                    email: this.state.email,
                    error: this.state.error,
                    signIn: this.signIn,
                    signUp: this.signUp,
                    signOut: this.signOut,
                }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
