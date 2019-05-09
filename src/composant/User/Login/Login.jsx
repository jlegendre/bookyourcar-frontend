import React, {useState} from 'react';
import * as PropTypes from 'prop-types';

import {Redirect} from "react-router";
import InputText from "../../Input/InputText.js";
//Material UI Componant
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from "react-router-dom";

/**
 * Formulaire de Login
 */
const Login = (props) => {
    const {classes, loginUser, token} = props;

    const [input, setInput] = useState({email: "", password: ""});

    /**
     * Update email input
     * @param event html event
     */
    const updateEmail = (event) => {
        setInput({
            ...input,
            email: event.target.value
        })
    };

    /**
     * Update password input
     * @param event html event
     */
    const updatePassword = (event) => {
        setInput({
            ...input,
            password: event.target.value
        })
    };

    /**
     * Call login user api
     */
    const fetchUser = event => {
        event.preventDefault();
        loginUser(input)
    };


    if (token) {
        //Si le token est présent on redirige vers la page d'acceuil automatiquement
        return <Redirect to={"/"}/>
    }

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <form onSubmit={event => fetchUser(event)}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component={"h1"} variant={"h5"}>
                        Connexion
                    </Typography>
                    <div className={classes.form}>
                        <InputText
                            id={"email"}
                            name={"Email"}
                            placeholder={"Email"}
                            type={"email"}
                            onChange={(event) => updateEmail(event)}
                        />
                        <InputText
                            id={"password"}
                            name={"Password"}
                            placeholder={"Mot de passe"}
                            type={"password"}
                            onChange={(event) => updatePassword(event)}
                        />
                        <Typography>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Se souvenir de moi?"
                            />
                            <Link className={classes.link} to={"/newAccount"}>
                                Créer un compte
                            </Link>
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Connexion
                        </Button>
                    </div>
                </Paper>
            </form>
        </div>
    );
};

Login.propTypes = {

    //classe css du composant
    classes: PropTypes.object.isRequired,

    //fonction qui permet a l'utilisateur de se connecter
    loginUser: PropTypes.func,

    //token de l'utilisateur en cours
    token: PropTypes.string
};

export default withStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    link: {
        float: 'right',
        marginTop: theme.spacing.unit * 2
    }
}))(Login)