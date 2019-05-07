import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
//Material UI Componant
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import StepInformation from "./Steps/StepInformation.js";
import StepComments from "./Steps/StepComments";
import StepFinish from "./Steps/StepFinish";

/**
 * Formulaire de réservation
 */
const BookNewCar = (props) => {
    const {classes} = props;

    const [activeStep, setActiveStep] = useState(0);
    const [formulaire, setFormulaire] = useState({
        dateDebut: "",
        dateFin: "",
        poleDebut: "",
        poleFin: "",
        commentaire: ""
    });

    /**
     * Fonction pour aller sur la page suivante
     */
    const handleNext = () => {
        if(activeStep === steps.length - 1) {

        } else {
            setActiveStep(activeStep + 1);
        }
    };

    /**
     * Fonction pour aller  sur la page précendente
     */
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    /**
     * Les étapes de la réservation
     * @type {string[]}
     */
    const steps = ["Information", "Commentaire", "Finalisation"];

    /**
     * Permet de savoir quelle étape afficher
     * @param step
     * @return {*}
     */
    const getStepContent = step => {
        switch (step) {
            case 0:
                return <StepInformation formulaire={formulaire} setFormulaire={setFormulaire}/>;
            case 1:
                return <StepComments formulaire={formulaire} setFormulaire={setFormulaire}/>;
            case 2:
                return <StepFinish/>;
            default:
                throw new Error('Unknown Step')
        }
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Réservation
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label =>
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        )}
                    </Stepper>
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} className={classes.button}>
                                    Retour
                                </Button>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Confirmer' : 'Suivant'}
                            </Button>
                        </div>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
};

BookNewCar.propTypes = {
    classes: PropTypes.object
};

export default withStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
}))(BookNewCar)