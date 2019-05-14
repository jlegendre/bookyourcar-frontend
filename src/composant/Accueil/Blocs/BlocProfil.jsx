import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Card} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

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

        return `https://www.gravatar.com/avatar/${md5(email)}?s=64`;
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
                        <Typography variant="subtitle1" color="textSecondary">
                            {user.userEmail}
                        </Typography>
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
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 151,
    }
}))(BlocProfil);