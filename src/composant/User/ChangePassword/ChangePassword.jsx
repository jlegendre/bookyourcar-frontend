import React, {useState} from 'react';
import * as PropTypes from 'prop-types';

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputText from "../../Commun/Input/InputText";
import {Redirect} from "react-router";
import {getBreakingLimit} from "../../../utils/cssUtils";
import {Hidden} from "@material-ui/core";
import Image from "../../Commun/Input/Image";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const ChangePassword = props => {

    const {classes, forgotPassword, token, setMessage} = props;

    const [email, setEmail] = useState("");
    const [resetSuccess, setResetSuccess] = useState(false);

    console.log(props);

    const fetchPasswordForgot = event => {
        event.preventDefault();
        forgotPassword(email, () => {
            setMessage({"Success": ["Un email vous a été envoyé pour changer votre mot de passe"]});
            setResetSuccess(true);
        })
    };

    if (token || resetSuccess) {
        return <Redirect to={"/"}/>
    }

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <form className={classes.form} onSubmit={fetchPasswordForgot}>
                <Paper className={classes.paper}>
                    <Hidden xsDown implementation={"css"}>
                        <Image name={"logo_transparent.png"} height={256}/>
                    </Hidden>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component={"h1"} variant={"h5"}>
                        Modification du mot de passe
                    </Typography>
                    <div className={classes.formInput}>
                        <InputText
                            id={"email"}
                            name={"Email"}
                            label={"Nouveau mot de passe"}
                            type={"email"}
                            required
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <InputText
                            id={"confirmationEmail"}
                            name={"ConfirmationEmail"}
                            label={"Confirmation"}
                            type={"email"}
                            required
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Valider
                        </Button>
                    </div>
                </Paper>
            </form>
        </div>
    )
};

ChangePassword.propTypes = {
    setMessage: PropTypes.func,
    classes: PropTypes.object,
    token: PropTypes.string,
    forgotPassword: PropTypes.func
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            margin: 0,
            height: '100%'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            height: '600',
            margin: 0
        }
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            height: '100%'
        }
    },
    formInput: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    }
}))(ChangePassword);