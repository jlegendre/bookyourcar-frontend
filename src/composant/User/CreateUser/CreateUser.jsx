import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {HowToRegOutlined as HowToRegOutlinedIcon} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import InputText from "../../Input/InputText";
import {Redirect} from "react-router";

const CreateUser = props => {

    const {classes, registerUser, token} = props;

    const [input, setInput] = useState({email: "", confirmPassword: "", password: ""});

    /**
     * Update email input
     * @param event html event
     */
    const updateEmail = event => {
        setInput({
            ...input,
            email: event.target.value
        })
    };

    /**
     * Update confirm email input
     * @param event html event
     */
    const updateConfirmPassword = event => {
        setInput({
            ...input,
            confirmPassword: event.target.value
        })
    };

    /**
     * Update password input
     * @param event html event
     */
    const updatePassword = event => {
        setInput({
            ...input,
            password: event.target.value
        })
    };

    const fetchCreateUser = () => {
        registerUser(input);
    };

    if(token) {
        //Si un token est présent, on redirige vers la page d'acceuil
        return <Redirect to={"/"} />
    }

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HowToRegOutlinedIcon/>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>
                    Register
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
                        placeholder={"Password"}
                        type={"password"}
                        onChange={(event) => updatePassword(event)}
                    />
                    <InputText
                        id={"confirmPassword"}
                        name={"ConfirmPassword"}
                        placeholder={"Confirm Password"}
                        type={"password"}
                        onChange={(event) => updateConfirmPassword(event)}
                    />
                    <Typography>
                        <Link className={classes.link} to={"/login"}>
                            Already have an account ?
                        </Link>
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => fetchCreateUser()}
                    >
                        Create account
                    </Button>
                </div>
            </Paper>
        </div>
    )
};

CreateUser.propTypes = {

    //classe css du composant
    classes: PropTypes.object,

    //token de l'utilisateur en cours
    token: PropTypes.string,

    //fonction qui permet d'enregistrer un nouveau utilisateur
    registerUser: PropTypes.func
};

export default withStyles(theme => ({
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
}))(CreateUser);