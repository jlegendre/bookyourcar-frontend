import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import Popup from "../../../Popup/Popup";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputText from "../../../Input/InputText";
import withStyles from "@material-ui/core/styles/withStyles";
import {getBreakingLimit} from "../../../../../utils/cssUtils";

const PopupDeletePassword = props => {

    const {classes, data, open, onClose, onAccept} = props;

    const [password, setPassword] = useState({
        userName: data && data.lastName ? data.lastName : "",
        userFirstname: data && data.firstName ? data.firstName : "",
        userNumpermis: data && data.drivingLicence ? data.drivingLicence : "",
        userPhone: data && data.phoneNumber ? data.phoneNumber : ""
    });

    return (

        <Popup
            open={open}
            onClose={onClose}
            title={"Modifier le profil"}
            okActionTxt={"Modifier"}
            okActionFunc={() => onAccept(user)}
            cancelActionTxt={"Annuler"}
            cancelActionFunc={() => onClose && onClose()}
        >
            {data && (
                <div className={classes.main}>
                    <CssBaseline/>
                    <form className={classes.form}>
                        <div className={classes.formInput}>
                            <InputText
                                id={"userName"}
                                name={"userName"}
                                label={"Nom"}
                                value={user.userName}
                                onChange={(event) => setUser({...user, userName: event.target.value})}
                            />
                            <InputText
                                id={"userFirstname"}
                                name={"userFirstname"}
                                label={"Prénom"}
                                value={user.userFirstname}
                                onChange={(event) => setUser({...user, userFirstname: event.target.value})}
                            />
                            <InputText
                                id={"userNumpermis"}
                                name={"userNumpermis"}
                                label={"Numéro de permis"}
                                value={user.userNumpermis}
                                onChange={(event) => setUser({...user, userNumpermis: event.target.value})}
                            />
                            <InputText
                                id={"userPhone"}
                                name={"userPhone"}
                                label={"Numéro de téléhpone"}
                                value={user.userPhone}
                                max={10}
                                format={"phone"}
                                onChange={(event) => setUser({...user, userPhone: event.target.value})}
                            />
                        </div>
                    </form>
                </div>
            )}
        </Popup>
    );
};

PopupUpdateProfil.propTypes = {
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
)(PopupDeletePassword);