import React, {useState} from 'react';
import PropTypes from 'prop-types';
//Material UI Componant
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
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
    }
});

/**
 * Formulaire de Login
 */
function Login(props) {
    const {classes, loginUser, error} = props;

    const [input, setInput] = useState({email: "", password: ""});

    const updateEmail = (event) => {
        setInput({
            ...input,
            email: event.target.value
        })
    };

    const updatePassword = (event) => {
        setInput({
            ...input,
            password: event.target.value
        })
    };

    const fetchUser = () => {
        loginUser(input)
    };


    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>
                    Sign in
                </Typography>
                <div className={classes.form}>
                    <FormControl margin={"normal"} fullWidth>
                        <TextField
                            id={"email"}
                            name={"email"}
                            autoFocus
                            placeholder={"Email"}
                            required
                            helperText={error.Email ? error.Email[0] : undefined}
                            error={!!error.Email}
                            onChange={(event) => updateEmail(event)}
                        />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <TextField
                            id={"password"}
                            name={"password"}
                            autoFocus
                            placeholder={"Password"}
                            required
                            helperText={error.Password ? error.Password[0] : undefined}
                            error={!!error.Password}
                            onChange={(event) => updatePassword(event)}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => fetchUser()}
                    >
                        Sign in
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func,
    error: PropTypes.object
};

export default withStyles(styles)(Login)