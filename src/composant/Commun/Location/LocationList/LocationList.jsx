import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";

const LocationList = props => {

    const {classes, locations} = props;

    return (
        <React.Fragment>
            {locations && locations.map(item =>
                <div className={classes.wrapper}>
                    {console.log(item)}
                </div>
            )}
        </React.Fragment>
    )
};

LocationList.propTypes = {
    classes: PropTypes.object,
    locations: PropTypes.array.isRequired
};

export default withStyles(theme => ({
    wrapper: {
        display: 'flex'
    },
    item: {
        flex: 1
    }
}))(LocationList);