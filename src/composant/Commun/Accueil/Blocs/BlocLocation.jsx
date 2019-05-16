import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import CardContent from "@material-ui/core/CardContent/index";
import Typography from "@material-ui/core/Typography/index";
import CardActions from "@material-ui/core/CardActions/index";
import Button from "@material-ui/core/Button/index";
import {Card} from "@material-ui/core";
import {Link} from "react-router-dom";

const BlocLocation = props => {

    const {classes, user} = props;

    let multipleLocations = user && user.locationsCount > 1;

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h3" variant="h3">
                            {user && user.locationsCount}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Location{multipleLocations && "s"}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Link to={"/booking"} className={classes.link}>
                            <Button size="small" color="primary">
                                Nouvelle location
                            </Button>
                        </Link>
                        <Link to={"/booking/me"} className={classes.link}>
                            <Button size="small" color="primary">
                                Voir mes locations
                            </Button>
                        </Link>
                    </CardActions>
                </div>
            </Card>
        </React.Fragment>
    )
};

BlocLocation.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object
};

export default withStyles( () => ({
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
}))(BlocLocation)
