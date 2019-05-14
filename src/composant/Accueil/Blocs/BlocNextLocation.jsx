import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Card, CardActions} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const BlocNextLocation = props => {

    const {classes} = props;

    const rnd = Math.floor(Math.random() * Math.floor(2));

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        {
                            rnd === 1 ? (
                                <Typography component="h5" variant="h5">
                                    Pas de réservation prévue
                                </Typography>
                            ) : (
                                <React.Fragment>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Votre prochaine location prévue est le
                                    </Typography>
                                    <Typography component="h3" variant="h3">
                                        18/10/1996
                                    </Typography>
                                </React.Fragment>
                            )
                        }
                    </CardContent>
                    <CardActions className={classes.action}>
                        {
                            rnd === 0 && (
                                <Button size="small" color="primary">
                                    Voir ma location
                                </Button>
                            )
                        }
                    </CardActions>
                </div>
            </Card>
        </React.Fragment>
    )
};

BlocNextLocation.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object
};

export default withStyles(() => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    card: {
        display: 'flex',
    },
    action: {
        display: 'block',
        textAlign: 'center'
    },
    content: {
        flex: '1 0 auto',
        textAlign: 'center'
    }
}))(BlocNextLocation)
