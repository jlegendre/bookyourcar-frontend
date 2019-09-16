import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { getBreakingLimit } from "../../../utils/cssUtils";
import Popup from "../../Commun/Popup/Popup";

const UpdatePole = props => {

    const { classes, data, open, onClose } = props;

    const createOKButton = () => {
        if (data.poleId === 0) {
            return ["Accepter", () => alert('ajouté')]
        }
    };

 
    if (!data) {
        return (<React.Fragment />)
    }

    return (
        <Popup
            open={open}
            onClose={onClose}
            title={`Pole N°${data.poleId}`}
            okActionTxt={createOKButton() && createOKButton()[0]}
            okActionFunc={createOKButton() && createOKButton()[1]}
            fullWidth
        >
            {data && (
                <div className={classes.main}>
                    <CssBaseline />
                    <form>
                        <div className={classes.form}>
                            <div className={classes.formLeft}>
                                <div>
                                    Nom : {data.poleName}
                                </div>
                                <div>
                                    Adresse : {data.poleAddress}
                                </div>
                                <div>
                                    Code Postal : {data.poleCP}
                                </div>
                                <div>
                                    Ville : {data.poleCity}
                                </div>
                                <div>
                                    Pôle de fin: {data.poleEnd}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Popup>
    );
};

UpdatePole.propTypes = {
    open: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func
};

export default withStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'flex', // Fix IE 11 issue.
        flexDirection: 'column',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            margin: 0,
            height: '100%'
        }
    },
    form: {
        display: 'flex',
        lineHeight: '1.5em',
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            height: '100%'
        }
    },
    formLeft: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'justify',
        maxWidth: 300
    },
    formRight: {
        paddingLeft: 20
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    link: {
        float: 'right',
        marginTop: theme.spacing.unit * 2
    }
})
)(UpdatePole);