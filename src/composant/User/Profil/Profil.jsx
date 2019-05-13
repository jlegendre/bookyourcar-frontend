import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import {Card, CssBaseline, Grid} from "@material-ui/core";
import {getBreakingLimit} from "../../../utils/cssUtils";
import withStyles from "@material-ui/core/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const md5 = require('md5');

const Profil = props => {

    const {classes, profil, fetchProfil} = props;

    useEffect(() => {
        fetchProfil()
    }, [fetchProfil]);

    console.log(profil);

    /**
     * Fonction temporaire le temps d'avoir une vrais image de profil
     * @return {string}
     */
    const getImage = () => {
        let email = "";
        if (profil && profil.userEmail) {
            email = profil.userEmail.trim();
        }

        return `https://www.gravatar.com/avatar/${md5(email)}?s=64`;
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cover}
                                image={getImage()}
                                title="Photo de profil"
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {profil.userName} {profil.userFirstname}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {profil.userEmail}
                                    </Typography>
                                </CardContent>
                                <div>
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
                    </Grid>
                </Grid>
            </main>
        </React.Fragment>
    )
};

Profil.propTypes = {
    classes: PropTypes.object,
    profil: PropTypes.object,
    fetchProfil: PropTypes.func
};

export default withStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
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
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    }
}))(Profil);