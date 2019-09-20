import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {getBreakingLimit} from "../../../../utils/cssUtils";
import Popup from "../../../Commun/Popup/Popup";
import InputText from "../../../Commun/Input/InputText";


const PopupValidateReservation = props => {

    const {classes, data, open, onClose} = props;
    const [input, setInput] = useState(data);

    const update = ((event, type) => {
        setInput({
            ...input,
            [type]: event.target.value
        });
    });

    const createOKButton = () => {
     alert('todo')
    };

    const createKOButton = () => {
         alert('todo')
    };

    console.log(data);

    if (!data) {
        return (<React.Fragment/>)
    }

    return (
        <Popup
            open={open}
            onClose={onClose}
            title={`Création d'un véhicule`}
            firstActionTxt={"Créer"}
            firstActionFunc={createOKButton}
            secondActionTxt={"Annuler"}
            secondActionFunc={createKOButton}
            fullWidth
        >
            {data && (
                <div className={classes.main}>
                    <CssBaseline/>
                    <form>
                        <div className={classes.form}>
                                <InputText className={classes.input} fullWidth={false}  id='vehBrand' name='vehBrand' label={"Marque"} type='text' required value={input.vehBrand}
                                           onChange={(event) => update(event, 'vehBrand')}/>
                                <InputText className={classes.input} fullWidth={false} id='vehModel' name='vehModel' label={"Modèle"} type='text' required value={input.vehModel}
                                           onChange={(event) => update(event, 'vehModel')}> Marque</InputText>
                                <InputText className={classes.input} fullWidth={false} id='vehModel' name='vehModel' label={"Immatriculation"} type='text' required value={input.vehRegistration}
                                           onChange={(event) => update(event, 'vehRegistration')}> Marque</InputText>
                                <InputText className={classes.input} fullWidth={false} id='vehModel' name='vehModel' label={"Date d'immatriculation"} type='date' required value={input.vehDatemec}
                                           onChange={(event) => update(event, 'vehDatemec')}> Marque</InputText>
                                <InputText className={classes.input} fullWidth={false} id='vehKm' name='vehKm' label={"Kilomètrage"} type='text' required value={input.vehKm}
                                           onChange={(event) => update(event, 'vehKm')}> Marque</InputText>
                                <InputText className={classes.input} fullWidth={false} id='vehTypeEssence' name='vehTypeEssence' label={"Type de carburant"} type='text' required value={input.vehTypeEssence}
                                           onChange={(event) => update(event, 'vehTypeEssence')}> Marque</InputText>
                                <InputText className={classes.input} fullWidth={false} id='vehColor' name='vehColor' label={"Couleur"} type='text' required value={input.vehColor}
                                           onChange={(event) => update(event, 'vehColor')}> Marque</InputText>
                               <InputText className={classes.input} fullWidth={false} id='vehNumberplace' name='vehNumberplace' label={"Nombre de places"} type='text' required value={input.vehNumberplace}
                                           onChange={(event) => update(event, 'vehNumberplace')}> Marque</InputText>
                               <InputText className={classes.input} fullWidth={false} id='poleName' name='poleName' label={"Pôle d'affectation"} type='text' required value={input.poleName}
                                           onChange={(event) => update(event, 'poleName')}> Marque</InputText>
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
            },
            flexDirection:'row',
            flexWrap: 'wrap'
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
        },
        input: {
            marginRight: '10px'
        }
    })
)(PopupValidateReservation);
