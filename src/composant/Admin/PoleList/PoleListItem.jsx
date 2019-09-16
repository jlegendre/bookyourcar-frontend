import React from 'react';
import {Icon} from "@material-ui/core";
import {Element, Ligne} from "../../Commun/Ligne/Ligne";


const PoleListItem = props => {

    const {data} = props;


    if (!data) {
        return <React.Fragment/>
    }

    return (
        <Ligne>
            <Element>
                <Icon>apartment</Icon>{data.poleName}
            </Element>
            <Element>
                <Icon>where_to_vote</Icon>{data.poleAddress} {data.poleCp} {data.poleCity}
            </Element>
        </Ligne>
    );

};


export default PoleListItem;

