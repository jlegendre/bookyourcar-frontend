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
import StepFinish from "./Steps/StepFinish.js";
import {unstable_useMediaQuery as useMediaQuery} from "@material-ui/core/useMediaQuery";
import {Redirect} from "react-router";
import {isValidDate} from "../../../utils/dateUtils";
import {getBreakingLimit} from "../../../utils/cssUtils";

/**
 * Formulaire de réservation
 */
const NewLocation = (props) => {
    const {classes, fetchNewLocation, setMessage, setNoMessageFor} = props;

    const computerView = useMediaQuery('(min-width:767px)');
    const [activeStep, setActiveStep] = useState(0);
    const [redirect, setRedirect] = useState(false);
    const [formulaire, setFormulaire] = useState({
        dateDebutResa: '',
        dateFinResa: '',
        poleIdDepart: '',
        poleIdDestination: '',
        comments: ''
    });

    /**
     * Fonction pour aller sur la page suivante
     */
    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            fetchNewLocation(formulaire, () => {
                setRedirect(true)
            })
        } else {
            let success = true;
            switch (activeStep) {
                case 0:
                    success = checkStepInformation();
                    break;
                case 1:
                    success = checkStepComments();
                    break;
                default:
                    success = false;
                    break;
            }
            if (success) {
                setActiveStep(activeStep + 1);
            }
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
    const steps = computerView ? ["Information", "Commentaire", "Finalisation"] : ["", "", ""];

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
                return <StepFinish formulaire={formulaire} />;
            default:
                break;
        }
    };

    /**
     * Vérifie le step Information
     * @return {boolean}
     */
    const checkStepInformation = () => {
        let success = true;
        let dateDebut = new Date(formulaire.dateDebutResa);
        let dateFin = new Date(formulaire.dateFinResa);

        //vérification de la date de début
        if (!isValidDate(dateDebut)) {
            setMessage({"dateDebutResa": ["La date début est invalide"]});
            success = false;
        } else {
            setNoMessageFor("dateDebutResa")
        }

        //vérification de la date de fin
        if (!isValidDate(dateFin)) {
            setMessage({"dateFinResa": ["La date de fin est invalide"]});
            success = false;
        } else {
            setNoMessageFor("dateFinResa")
        }

        //si les deux dates sont ok on vérifie si la date début est avant la date de fin
        if (isValidDate(dateDebut) && isValidDate(dateFin)) {
            if (dateDebut > dateFin) {
                setMessage({
                    "dateDebutResa": ["La date doit être avant la date de fin"],
                    "dateFinResa": ["La date doit être après la date de début"]
                });
                success = false;
            } else {
                setNoMessageFor("dateDebutResa");
                setNoMessageFor("dateFinResa");
            }
        }

        //vérification pour le pole id depart
        if (formulaire.poleIdDepart === '') {
            setMessage({"poleIdDepart": ["Veuillez choisir un pole de départ"]})
            success = false;
        } else {
            setNoMessageFor("poleIdDepart");
        }

        //vérification pour le pole id destination
        if (formulaire.poleIdDestination === '') {
            setMessage({"poleIdDestination": ["Veuillez choisir une pole de destination"]})
            success = false
        } else {
            setNoMessageFor("poleIdDestination")
        }

        return success;
    };


    /**
     * Vérifie le Step comments
     * @return {boolean}
     */
    const checkStepComments = () => {
        if(formulaire.comments.trim().length <= 10) {
            setMessage({"comments" : ["Veuillez saisir au moins 10 caracteres"]});
            return false;
        } else {
            setNoMessageFor("comments");
        }
        return true;
    };

    if (redirect) {
        return <Redirect to={"/"}/>
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Location
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

NewLocation.propTypes = {
    classes: PropTypes.object,
    fetchNewLocation: PropTypes.func,
    setMessage: PropTypes.func,
    setNoMessageFor: PropTypes.func
};

export default withStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            margin: 0,
            height: '100%'
        }
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
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            margin: 0,
            height: '100%'
        }
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
}))(NewLocation)