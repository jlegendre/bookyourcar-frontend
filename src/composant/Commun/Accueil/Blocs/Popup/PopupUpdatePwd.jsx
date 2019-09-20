import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import Popup from "../../../Popup/Popup";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputText from "../../../Input/InputText";
import withStyles from "@material-ui/core/styles/withStyles";
import {getBreakingLimit} from "../../../../../utils/cssUtils";

const PopupUpdatePwd = props => {

    const {classes, open, onClose, onAccept} = props;

    const [password, setPassword] = useState({
        password: "",
        passwordConfirmation: "",
        oldPassword: ""
    });

    return (

        <Popup
            open={open}
            onClose={onClose}
            title={"Modifier le profil"}
            firstActionTxt={"Modifier"}
            firstActionFunc={() => onAccept(password)}
            secondActionTxt={"Annuler"}
            secondActionFunc={() => onClose && onClose()}
        >
            <div className={classes.main}>
                <CssBaseline/>
                <form className={classes.form}>
                    <div className={classes.formInput}>
                        <InputText
                            id={"oldPassword"}
                            name={"OldPassword"}
                            label={"Ancien mot de passe"}
                            value={password.oldPassword}
                            type={"password"}
                            onChange={(event) => setPassword({...password, oldPassword: event.target.value})}
                        />

                        <InputText
                            id={"password"}
                            name={"Password"}
                            label={"Nouveau mot de passe"}
                            value={password.password}
                            type={"password"}
                            onChange={(event) => setPassword({...password, password: event.target.value})}
                        />

                        <InputText
                            id={"passwordConfirmation"}
                            name={"PasswordConfirmation"}
                            label={"Confirmation"}
                            value={password.passwordConfirmation}
                            type={"password"}
                            onChange={(event) => setPassword({...password, passwordConfirmation: event.target.value})}
                        />
                    </div>
                </form>
            </div>
        </Popup>
    );
};

PopupUpdatePwd.propTypes = {
    open: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func
};

export default withStyles((theme) => ({
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
        form: {
            [theme.breakpoints.down(getBreakingLimit(theme))]: {
                height: '100%'
            }
        },
        formInput: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        submit: {
            marginTop: theme.spacing.unit * 3,
        },
        link: {
            float: 'right',
            marginTop: theme.spacing.unit * 2
        }
    })
)(PopupUpdatePwd);