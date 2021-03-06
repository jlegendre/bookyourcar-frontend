import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import CardContent from "@material-ui/core/CardContent/index";
import Typography from "@material-ui/core/Typography/index";
import {Card, CardActions} from "@material-ui/core";
import Button from "@material-ui/core/Button/index";
import {formatDate} from "../../../../utils/dateUtils";
import {Link} from "react-router-dom";

const BlocNextLocation = props => {

    const {classes, user} = props;
    let haveNextLocation = user && user.nextLocation;

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="subtitle1" color="textSecondary">
                            {haveNextLocation && "Votre prochaine location prévue est le"}
                        </Typography>

                        {haveNextLocation ? (
                            <Typography component={"h3"} variant={"h3"}>
                                {user && formatDate(user.nextLocation)}
                            </Typography>
                        ) : (
                            <Typography component={"h5"} variant={"h5"}>
                                Pas de location prévue
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions className={classes.action}>
                        {
                            haveNextLocation &&
                            <Link to={`/booking/me/${user.nextLocationId}`} className={classes.link}>
                                <Button size="small" color="primary">
                                    Voir ma location
                                </Button>
                            </Link>
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
    },
    link: {
        textDecoration: 'none'
    }
}))(BlocNextLocation)
