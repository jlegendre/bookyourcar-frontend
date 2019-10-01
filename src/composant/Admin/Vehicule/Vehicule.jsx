import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import Table from "../../Commun/Table/Table";

import columns from './columns';
import Supprimer from "../Action/Supprimer";
import InputText from "../../Commun/Input/InputText";
import InputSelect from '../../Commun/Input/InputSelect';
import Popup from "../../Commun/Popup/Popup";

const Vehicule = props => {

    const {fetchVehicules, fetchVehicule, vehiculeList, vehiculeDetail, fetchNewVehicule, fetchDeleteVehicule, fetchUpdateVehicule, fetchPoles, poles, setNoMessage} = props;

    const [consultationModification, setConsultationModification] = useState(false);
    const [supressionVehicule, setSupressionVehicule] = useState(false);
    const [data, setData] = useState(vehiculeDetail || {});
    const [state, setState] = useState("consult");

    useEffect(() => {
        fetchVehicules();
        fetchPoles();
    }, [fetchVehicules, fetchPoles]);

    const saveVehicule = () => {
        fetchNewVehicule(data, success => {
            if (success) {
                //si la requête est un succes, on ferme la fenetre
                setConsultationModification(false)
            }
        })
    };

    const modificationVehicule = () => {
        setConsultationModification(false);
        fetchUpdateVehicule(data.vehId, data);
    };

    const supprimerVehicule = () => {
        fetchDeleteVehicule(data.vehId);
        setSupressionVehicule(false);
        setConsultationModification(false);
    };

    const openConsultationModification = row => {
        fetchVehicule(row.vehId, data => {
            data.vehTypeEssence = data.vehTypeEssence.toLowerCase();
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
        setState("consult");
        setData({})
    };


    return (
        <React.Fragment>
            <Table
                title={"Gestion des véhicules"}
                columns={columns}
                data={vehiculeList}
                onClick={openConsultationModification}
                onAdd={() => {
                    setData({});
                    setConsultationModification(true);
                    setState("new");
                }}
            />

            <Popup
                title={"Véhicule"}
                onClose={closePopup}
                open={consultationModification}
                firstActionTxt={state === "consult" ? "Supprimer" : undefined}
                firstActionFunc={() => setSupressionVehicule(true)}
                secondActionTxt={state === "consult" ? "Modifier" : undefined}
                secondActionFunc={() => modificationVehicule()}
                thirdActionTxt={state === "new" ? "Enregistrer": undefined}
                thirdActionFunc={saveVehicule}
            >
                <InputText
                    id={"vehBrand"}
                    name={"VehBrand"}
                    label={"Marque"}
                    value={data.vehBrand || ""}
                    onChange={event => updateField(event, "vehBrand")}
                    fullWidth={false}
                    style={{marginLeft: '10px'}}
                />
                <InputText
                    id={"vehModel"}
                    name={"VehModel"}
                    label={"Modèle"}
                    value={data.vehModel || ""}
                    onChange={event => updateField(event, "vehModel")}
                    fullWidth={false}
                    style={{marginLeft: '10px'}}
                />
                <InputText
                    id={"vehColor"}
                    name={"VehColor"}
                    label={"Couleur"}
                    value={data.vehColor || ""}
                    onChange={event => updateField(event, "vehColor")}
                    fullWidth={false}
                    style={{marginLeft: '10px'}}
                />
                <InputText
                    id={"vehRegistration"}
                    name={"VehRegistration"}
                    label={"Immatriculation"}
                    value={data.vehRegistration || ""}
                    onChange={event => updateField(event, "vehRegistration")}
                    fullWidth={false}
                    style={{marginLeft: '10px', marginRight: '10px'}}
                />
                <InputSelect
                    id={"vehTypeEssence"}
                    name={"VehTypeEssence"}
                    label={"Type de carburant"}
                    value={data.vehTypeEssence || ""}
                    onChange={event => updateField(event, "vehTypeEssence")}
                    fullWidth={false}
                    style={{marginLeft: '10px'}}
                    data={[{value: 'sans plomb 95', label: 'sans plomb 95'},
                        {value: 'sans plomb 98', label: 'sans plomb 98'},
                        {value: 'diesel', label: 'diesel'},
                        {value: 'electrique', label: 'electrique'}]}
                />
                <InputText
                    id={"vehNumberplace"}
                    name={"VehNumberplace"}
                    label={"Nombre de places"}
                    value={data.vehNumberplace || ""}
                    onChange={event => updateField(event, "vehNumberplace")}
                    fullWidth={false}
                    style={{marginLeft: '10px'}}
                />
                <InputSelect
                    id={"vehPole"}
                    name={"VehPole"}
                    label={"Pole de rattachement"}
                    value={data.poleId || ""}
                    onChange={event => updateField(event, "poleId")}
                    fullWidth={false}
                    style={{marginLeft: '10px'}}
                    data={poles}
                />
            </Popup>

            <Supprimer
                title={"Suppression Véhicule"}
                open={supressionVehicule}
                onClose={() => setSupressionVehicule(undefined)}
                onAccept={supprimerVehicule}
                text={"êtes vous sur de vouloir supprimer le véhicule sélectionné ?"}
            />

        </React.Fragment>
    )
};

Vehicule.propTypes = {
    fetchVehicules: PropTypes.func,
    fetchVehicule: PropTypes.func,
    vehiculeList: PropTypes.array,
    vehiculeDetail: PropTypes.object,
    fetchNewVehicule: PropTypes.func,
    fetchDeleteVehicule: PropTypes.func,
    fetchUpdateVehicule: PropTypes.func,
    setNoMessage: PropTypes.func
};

export default Vehicule;
