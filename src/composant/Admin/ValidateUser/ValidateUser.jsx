import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import UserItem from "./UserItem";

const ValidateUser = props => {

    const {fetchUserInValidation, userInWaiting, fetchValidateUser, fetchDeleteUser} = props;


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
        <React.Fragment>
            {userInWaiting && userInWaiting.map(item =>
                <UserItem
                    key={item.userId}
                    data={item}
                    onRefuse={refuseUser}
                    onAccet={acceptUser}
                />
            )}
        </React.Fragment>
    )
};

ValidateUser.propTypes = {
    fetchUserInValidation: PropTypes.func,
    userInWaiting: PropTypes.array,
    fetchValidateUser: PropTypes.func,
    fetchDeleteUser: PropTypes.func
};

export default ValidateUser;