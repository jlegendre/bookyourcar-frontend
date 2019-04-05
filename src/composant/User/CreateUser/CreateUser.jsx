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
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select"
import {Redirect} from "react-router";

const CreateUser = props => {

    const {classes, registerUser, token} = props;

    const [input, setInput] = useState({email: "", confirmPassword: "", password: "", name: "", firstName: "", pole: "", phoneNumber: ""});
    const [accountSuccess, setAccountSuccess] = useState(false);

    /**
     * @Input event: données de l'input
     * @Input type: donnée concernée par l'input
     * @type {Function}
     */
    const updateForm = ((event, type) => {
        setInput({
            ...input,
            [type]: event.target.value
        })
    });

    const fetchCreateUser = () => {
        registerUser(input, () => {
            setAccountSuccess(true);
        })
    };

    if (token || accountSuccess) {
        return <Redirect to={"/"}/>
    }

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HowToRegOutlinedIcon/>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>
                    Inscription
                </Typography>
                <div className={classes.form}>
                    <InputText
                        name={"Prenom"}
                        id={"prenom"}
                        placeholder={"Prénom"}
                        type={"text"}
                        onChange={(event) => updateForm(event, 'firstName')}
                    /><InputText
                    id={"nom"}
                    name={"Nom"}
                    placeholder={"Nom"}
                    type={"text"}
                    onChange={(event) => updateForm(event, 'name')}
                    /><InputText
                        id={"phoneNumber"}
                        name={"PhoneNumber"}
                        placeholder={"Numero de telephone"}
                        type={"text"}
                        onChange={(event) => updateForm(event, 'phoneNumber')}
                    />
                    <Select
                        id={"pole"}
                        name={"Pole"}
                        placeholder={"Pole"}
                        onChange={(event) => updateForm(event, 'pole')}
                    >
                        <MenuItem>

                        </MenuItem>
                    </Select>
                    <InputText
                    id={"email"}
                    name={"Email"}
                    placeholder={"Email"}
                    type={"email"}
                    onChange={(event) => updateForm(event, 'email')}
                />
                    <InputText
                        id={"password"}
                        name={"Password"}
                        placeholder={"Mot de passe"}
                        type={"password"}
                        onChange={(event) => updateForm(event, 'password')}
                    />
                    <InputText
                        id={"confirmPassword"}
                        name={"ConfirmPassword"}
                        placeholder={"Confirmation du mot de passe"}
                        type={"password"}
                        onChange={(event) => updateForm(event, 'confirmPassword')}
                    />
                    <Typography>
                        <Link className={classes.link} to={"/login"}>
                            Déjà un compte ?
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
                        Créer un compte
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