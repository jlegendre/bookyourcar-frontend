import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Card} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import _ from 'lodash';

const md5 = require('md5');

const BlocProfil = props => {

    const {classes, user} = props;

    /**
     * Fonction temporaire le temps d'avoir une vrais image de profil
     * @return {string}
     */
    const getImage = () => {
        let email = "";
        if (user && user.userEmail) {
            email = user.userEmail.trim();
        }

        return `https://www.gravatar.com/avatar/${md5(email)}?s=165`;
    };


    const getPhoneNumer = () => {
        let str = '';
        if(user && user.userPhone) {
            _.each(user.userPhone, (char, i) => {
                str += char;
                if(i % 2 === 1) {
                    str += ' ';
                }
            })
        }
        return str;
    };

    const getNumeroPermis = () => {
        let str = 'Aucun numéro de permis';

        if(user && user.userNumpermis) {
            str = user.userNumpermis;
        }

        return str;
    };

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={getImage()}
                    title="Photo de profil"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {user.userName} {user.userFirstname}
                        </Typography>

                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user.userEmail}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user.poleName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {getPhoneNumer()}
                                </Typography>
                            </Grid>
                            <Grid itex xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {getNumeroPermis()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Modifier
                        </Button>
                        <Button size="small" color="primary">
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
    user: PropTypes.object
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