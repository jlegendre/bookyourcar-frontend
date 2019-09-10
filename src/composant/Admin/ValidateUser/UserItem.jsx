import React, {useState} from 'react';
import {Element, Ligne} from "../../Commun/Ligne/Ligne";
import PopupValidateUser from "./PopupValidateUser";

const UserItem = props => {

    const {data, onAccept, onRefuse} = props;
    const [openPopup, setOpenPopup] = useState(false);

    if (!data) {
        return <React.Fragment/>
    }

    return (
        <React.Fragment>
            <Ligne onClick={() => setOpenPopup(true)}>
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

            <PopupValidateUser
                open={openPopup}
                onAccept={() => onAccept(data.userId)}
                onRefuser={() => onRefuse(data.userId)}
                onClose={() => setOpenPopup(false)}
                data={data}
            />
        </React.Fragment>
    )
};

export default UserItem;