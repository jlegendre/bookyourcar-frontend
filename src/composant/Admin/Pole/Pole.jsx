import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import Table from "../../Commun/Table/Table";

import columns from './columns';
import Supprimer from "../Action/Supprimer";
import InputText from "../../Commun/Input/InputText";
import Popup from "../../Commun/Popup/Popup";

const Pole = props => {

    const {fetchPoles, fetchPole, poleList, poleDetail, fetchNewPole, fetchDeletePole, fetchUpdatePole, setNoMessage} = props;

    const [consultationModification, setConsultationModification] = useState(false);
    const [state, setState] = useState("consult");
    const [supressionPole, setSupressionPole] = useState(false);
    const [data, setData] = useState(poleDetail || {});

    useEffect(() => {
        fetchPoles();
    }, [fetchPoles]);

    const savePole = () => {
        fetchNewPole(data, success => {
            if (success) {
                //si la requête est un succes, on ferme la fenetre
                setConsultationModification(false);
                setState("consult")
            }
        })
    };

    const modificationPole = () => {
        fetchUpdatePole(data.poleId, data);
        setConsultationModification(false)
    };

    const supprimerPole = () => {
        fetchDeletePole(data.poleId);
        setSupressionPole(false);
        setConsultationModification(false);
    };

    const openConsultationModification = row => {
        fetchPole(row.poleId, data => {
            setData(data)
        });
        setConsultationModification(true);
    };

    const updateField = ((event, type) => {
        setData({
            ...data,
            [type]: event.target.value
        });
    });

    const closePopup = () => {
        setNoMessage();
        setConsultationModification(false);
        setState('consult');
        setData({})
    };

    return (
        <React.Fragment>
            <Table
                title={"Gestion des pôles"}
                columns={columns}
                data={poleList}
                onClick={openConsultationModification}
                onAdd={() => {
                    setData({});
                    setConsultationModification(true);
                    setState("new");
                }}
            />

            <Popup
                title={"Pôle"}
                open={consultationModification}
                onClose={closePopup}
                firstActionTxt={state === "consult" ? "Supprimer" : undefined}
                firstActionFunc={() => setSupressionPole(true)}
                secondActionTxt={state === "consult" ? "Modifier" : undefined}
                secondActionFunc={() => modificationPole()}
                thirdActionTxt={state === "new" ? "Enregistrer" : undefined}
                thirdActionFunc={savePole}
            >
                <InputText
                    id="poleName"
                    name={"PoleName"}
                    label="Nom"
                    value={data.poleName || ""}
                    onChange={(event => updateField(event, "poleName"))}
                />
                <InputText
                    id={"poleCity"}
                    name={"PoleCity"}
                    label={"Ville"}
                    value={data.poleCity || ""}
                    onChange={event => updateField(event, "poleCity")}
                />
                <InputText
                    id={"poleAddress"}
                    name={"PoleAddress"}
                    label={"Adresse"}
                    value={data.poleAddress || ""}
                    onChange={event => updateField(event, "poleAddress")}
                />
                <InputText
                    id={"poleCp"}
                    name={"PoleCp"}
                    label={"Code Postal"}
                    type={"number"}
                    value={data.poleCp || ""}
                    onChange={event => updateField(event, "poleCp")}
                />

            </Popup>

            <Supprimer
                title={"Suppression Pole"}
                open={supressionPole}
                onClose={() => setSupressionPole(undefined)}
                onAccept={supprimerPole}
                text={"êtes vous sur de vouloir supprimer le pôle sélectionné ?"}
            />

        </React.Fragment>
    )
};

Pole.propTypes = {
    fetchPoles: PropTypes.func,
    fetchPole: PropTypes.func,
    poleList: PropTypes.array,
    poleDetail: PropTypes.object,
    fetchNewPole: PropTypes.func,
    fetchDeletePole: PropTypes.func,
    fetchUpdatePole: PropTypes.func,
    setNoMessage: PropTypes.func
};

export default Pole;
