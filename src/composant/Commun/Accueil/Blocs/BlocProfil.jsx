import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Card} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia/index";
import CardContent from "@material-ui/core/CardContent/index";
import Typography from "@material-ui/core/Typography/index";
import CardActions from "@material-ui/core/CardActions/index";
import Button from "@material-ui/core/Button/index";
import Grid from "@material-ui/core/Grid/index";
import _ from 'lodash';
import PopupUpdateProfil from "./Popup/PopupUpdateUser";
import PopupUpdatePwd from "./Popup/PopupUpdatePwd";

const md5 = require('md5');

const BlocProfil = props => {

    const {classes, user, updateProfil, updatePassword} = props;

    const [openPopupProfil, setOpenPopupProfil] = useState(false);
    const [openPopupPassword, setOpenPopupPassword] = useState(false);

    /**
     * Fonction temporaire le temps d'avoir une vrais image de profil
     * @return {string}
     */
    const getImage = () => {
        let email = "";
        if (user && user.email) {
            email = user.email.trim();
        }

        return `https://www.gravatar.com/avatar/${md5(email)}?s=165`;
    };


    const getPhoneNumer = () => {
        let str = '';
        if (user && user.phoneNumber) {
            _.each(user.phoneNumber, (char, i) => {
                str += char;
                if (i % 2 === 1) {
                    str += ' ';
                }
            })
        }
        return str;
    };

    const getNumeroPermis = () => {
        let str = 'Aucun numéro de permis';
        if (user && user.drivingLicence) {
            str = user.drivingLicence;
        }

        return str;
    };

    return (
        <React.Fragment>

            <PopupUpdateProfil
                open={openPopupProfil}
                onClose={() => setOpenPopupProfil(false)}
                data={user}
                onAccept={(user) => {
                    setOpenPopupProfil(false);
                    updateProfil(user)
                }}
            />

            <PopupUpdatePwd
                open={openPopupPassword}
                onClose={() => setOpenPopupPassword(false)}
                onAccept={(password) => updatePassword(password, success => {
                    setOpenPopupPassword(!success)
                })}
            />

            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={getImage()}
                    title="Photo de profil"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {user && user.firstName} {user && user.lastName}
                        </Typography>

                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user && user.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user && user.pole}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {getPhoneNumer()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {getNumeroPermis()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => setOpenPopupProfil(true)}>
                            Modifier
                        </Button>
                        <Button size="small" color="primary" onClick={() => setOpenPopupPassword(true)}>
                            Changer mot de passe
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </React.Fragment>
    )
};

BlocProfil.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object,
    updateProfil: PropTypes.func,
    updatePassword: PropTypes.func
};

export default withStyles(theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 208,
    }
}))(BlocProfil);