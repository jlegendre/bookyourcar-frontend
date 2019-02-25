import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    loginUser: PropTypes.func
};

export default Login