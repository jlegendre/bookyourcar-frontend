import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router";

/**
 * Page de login de l'application
 */
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            password: undefined
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    /**
     * Call l'api d'authentification
     */
    handleLogin() {
        this.props.loginUser(this.state.username, this.state.password);
    }

    /**
     * Save dans le state de react l'username
     * @param event event html
     */
    setUsername(event) {
        this.setState({username: event.target.value});
    }

    /**
     * Save dans le state de react le password
     * @param event event html
     */
    setPassword(event) {
        this.setState({password: event.target.value});
    }


    render() {

        //Si l'utilisateur est déjà connecté, on le redirige vers l'acceuil
        if(this.props.user && this.props.user.token) {
            return <Redirect to={"/"} />
        }

        return (
            <div>
                <form>
                    <TextField
                        id={"login"}
                        placeholder={"Email"}
                        label={"Email"}
                        defaultValue={this.state.username}
                        onChange={this.setUsername}
                        fullWidth
                        required
                        error={this.props.error["Email"] !== undefined}
                        helperText={this.props.error["Email"] !== undefined && this.props.error["Email"][0]}
                    />
                    <TextField
                        id={"password"}
                        type={"password"}
                        placeholder={"Mot de passe"}
                        label={"Mot de passe"}
                        defaultValue={this.state.password}
                        onChange={this.setPassword}
                        fullWidth
                        required
                        error={this.props.error["Password"] !== undefined}
                        helperText={this.props.error["Password"] !== undefined && this.props.error["Password"][0]}
                    />
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={this.handleLogin}
                        fullWidth
                    >
                        SE CONNECTER
                    </Button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    history: PropTypes.object,
    token: PropTypes.object,
    loginUser: PropTypes.func,
    user: PropTypes.object,
    error: PropTypes.object
};

export default Login