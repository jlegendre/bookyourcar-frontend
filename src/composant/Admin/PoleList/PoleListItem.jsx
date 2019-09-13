import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import { Icon } from "@material-ui/core";
import { Element, Ligne } from "../../Commun/Ligne/Ligne";




const PoleListItem = props => {

    const { classes, data } = props;


    if (!data) {
        return <React.Fragment />
    }

    return (
        
            <Ligne>
            <Element><Icon >apartment</Icon>{data.poleName}</Element>
            <Element><Icon >where_to_vote</Icon>{data.poleAddress} {data.poleCp} {data.poleCity}</Element>
            </Ligne>
        
    );
    
};


export default PoleListItem;

