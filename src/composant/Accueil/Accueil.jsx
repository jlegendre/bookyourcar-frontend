import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import {CssBaseline, Grid} from "@material-ui/core";
import {getBreakingLimit} from "../../utils/cssUtils";
import withStyles from "@material-ui/core/styles/withStyles";
import BlocProfil from "./Blocs/BlocProfil";
import BlocLocation from "./Blocs/BlocLocation";
import BlocNextLocation from "./Blocs/BlocNextLocation";


const Accueil = props => {

    const {classes, profil, fetchProfil} = props;

    useEffect(() => {
        !profil && fetchProfil()
    }, [fetchProfil, profil]);

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <BlocProfil user={profil}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <BlocLocation user={profil}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <BlocNextLocation user={profil}/>
                    </Grid>
                </Grid>
            </main>
        </React.Fragment>
    )
};

Accueil.propTypes = {
    classes: PropTypes.object,
    profil: PropTypes.object,
    fetchProfil: PropTypes.func
};

export default withStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        height: '100%',
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 1000,
            margin: 'auto'
        }
    }
}))(Accueil);