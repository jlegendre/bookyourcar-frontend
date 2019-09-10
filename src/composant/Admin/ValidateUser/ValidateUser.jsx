import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import UserItem from "./UserItem";
import {getBreakingLimit} from "../../../utils/cssUtils";
import withStyles from "@material-ui/core/styles/withStyles";

const ValidateUser = props => {

    const {classes, fetchUserInValidation, userInWaiting, fetchValidateUser, fetchDeleteUser} = props;


    useEffect(() => {
        fetchUserInValidation();
    }, [fetchUserInValidation]);


    /**
     * Accepte l'utilisateur
     * @param id identifiant de l'utilisateur
     */
    const acceptUser = id => {
        fetchValidateUser(id);
    };

    /**
     * Refuse l'utilisateur
     * @param id identifiant de l'utilisateur
     */
    const refuseUser = id => {
        fetchDeleteUser(id);
    };

    return (
        <div className={classes.main}>
            {userInWaiting && userInWaiting.map(item =>
                <UserItem
                    key={item.userId}
                    data={item}
                    onRefuse={refuseUser}
                    onAccept={acceptUser}
                />
            )}
        </div>
    )
};

ValidateUser.propTypes = {
    fetchUserInValidation: PropTypes.func,
    userInWaiting: PropTypes.array,
    fetchValidateUser: PropTypes.func,
    fetchDeleteUser: PropTypes.func
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
}))(ValidateUser)