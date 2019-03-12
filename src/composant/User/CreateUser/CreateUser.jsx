import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import InputText from "../../Input/InputText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/styles";

const CreateUser = props => {

    const {classes} = props;

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>
                    Sign in
                </Typography>
                <div className={classes.form}>
                    <InputText
                        id={"email"}
                        name={"Email"}
                        placeholder={"Email"}
                    />
                    <InputText
                        id={"password"}
                        name={"Password"}
                        placeholder={"Password"}
                        type={"password"}
                    />
                    <Typography>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Link href={"/newAccount"} className={classes.link} color={"primary"}>
                            Create Account
                        </Link>
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </div>
            </Paper>
        </div>
    )
};


export default withStyles({

})(CreateUser);