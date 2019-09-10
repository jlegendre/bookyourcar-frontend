import React from 'react';
import {Element, Ligne} from "../../Commun/Ligne/Ligne";

const UserItem = props => {

    const {data, onAccept, onRefuse} = props;

    if (!data) {
        return <React.Fragment/>
    }

    return (
        <Ligne>
            <Element>
                {data.userName}
            </Element>
            <Element>
                {data.userFirstname}
            </Element>

            <Element>
                {data.userEmail}
            </Element>
            <Element>
                {data.poleName}
            </Element>

        </Ligne>
    )
};

export default UserItem;