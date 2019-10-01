import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {getBreakingLimit} from "../../../../utils/cssUtils";
import {formatDate} from "../../../../utils/dateUtils";
import Popup from "../../Popup/Popup";
import PopupValidateReservationLeftPart from "./PopupValidateReservationLeftPart";

const PopupValidateReservation = props => {

    const {classes, data, open, onAccept, onRefuser, onStart, onFinish, setData, onClose, updateable, onUpdate} = props;

    const createOKButton = () => {
        if (updateable) {
            if (data.locStateId === 0) {
                return ["Accepter", () => {
                    onAccept(data)
                }]
            } else if (data.locStateId === 2) {
                return ["Démarrer la location", () => {
                    onStart(data)
                }]
            }
        }
    };

    const createKOButton = () => {
        if (updateable) {
            if (data.locStateId === 0) {
                return ["Refuser", () => {
                    onRefuser(data)
                }]
            } else if (data.locStateId === 1) {
                return ["Terminer la location", () => {
                    onFinish(data)
                }]
            }
        }
    };

    const createUpdateButton = () => {
        if (updateable) {
            if (data.locStateId === 2) {
                return ["Mettre a jour la location", () => {
                    onUpdate(data)
                }]
            }
        }
    }


    if (!data) {
        return (<React.Fragment/>)
    }

    const testData = dataVehUpdated => {
        setData(dataVehUpdated);
        if (data.locStateId === 2) {
            createOKButton();
        }
    };


    return (
        <Popup
            open={open}
            title={`Location N°${data.locId} - Status : Location`}
            firstActionTxt={createOKButton() && createOKButton()[0]}
            firstActionFunc={createOKButton() && createOKButton()[1]}
            secondActionTxt={createKOButton() && createKOButton()[0]}
            secondActionFunc={createKOButton() && createKOButton()[1]}
            thirdActionFunc={createUpdateButton() && createUpdateButton()[1]}
            thirdActionTxt={createUpdateButton() && createUpdateButton()[0]}
            fullWidth
            onClose={onClose}
        >
            {data && (
                <div className={classes.main}>
                    <CssBaseline/>
                    <form>
                        <div className={classes.form}>
                            <div className={classes.formLeft}>
                                <div>
                                    Demandeur : {data.user}
                                </div>
                                <div>
                                    Début: {formatDate(data.dateStart)}
                                </div>
                                <div>
                                    Fin: {formatDate(data.dateEnd)}
                                </div>
                                <div>
                                    Pôle de départ: {data.poleStart}
                                </div>
                                <div>
                                    Pôle de fin: {data.poleEnd}
                                </div>
                                <div style={{lineHeight: '1em'}}>
                                    Commentaire: {data.comment}
                                </div>
                            </div>
                            <div className={classes.formRight}>
                                <PopupValidateReservationLeftPart
                                    data={data}
                                    setData={testData}
                                    updateable={updateable}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Popup>
    );
};

PopupValidateReservation.propTypes = {
    open: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    updateable: PropTypes.bool,
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
)(PopupValidateReservation);
