import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import Table from "../../Commun/Table/Table";
import ConsultationModification, {VIEW} from '../Action/ConsultationModification';

import columns from './columns';
import Supprimer from "../Action/Supprimer";
import InputText from "../../Commun/Input/InputText";

const Vehicule = props => {

    const {fetchVehicules, fetchVehicule, vehiculeList, vehiculeDetail, fetchNewVehicule, fetchDeleteVehicule, fetchUpdateVehicule} = props;
    const [consultationModification, setConsultationModification] = useState({visible: false, state: VIEW});
    const [supressionVehicule, setSupressionVehicule] = useState(false);
    const [data, setData] = useState(vehiculeDetail || {});
    const [deletedData, setDeletedData] = useState(undefined);

    useEffect(() => {
        fetchVehicules();
    }, [fetchVehicules]);

    const acceptVehicule = () => {
        fetchNewVehicule(data, success => {
            if (success) {
                //si la requête est un succes, on ferme la fenetre
                setConsultationModification({visible: false})
            }
        })
    };

    const modificationVehicule = () => {
        fetchUpdateVehicule(data.vehId, data);
        setConsultationModification({visible: false})
    };

    const supprimerVehicule = () => {
        deletedData.forEach(vehicule => {
            fetchDeleteVehicule(vehicule.vehId);
        });
        setSupressionVehicule(false);
    };

    const openConsultationModification = row => {
        fetchVehicule(row.vehId, data => {
            setData(data)
        });
        setConsultationModification({visible: true, state: VIEW});
    };

    const updateField = ((event, type) => {
        setData({
            ...data,
            [type]: event.target.value
        });
    });

    return (
        <React.Fragment>
            <Table
                title={"Gestion des véhicules"}
                columns={columns}
                data={vehiculeList}
                onClick={openConsultationModification}
                onDelete={data => {
                    setDeletedData(data);
                    setSupressionVehicule(true)
                }}
                onAdd={() => {
                    setData({});
                    setConsultationModification({visible: true, state: 'new'})
                }}
            />

            <ConsultationModification
                title={"Véhicule"}
                open={consultationModification.visible}
                state={consultationModification.state}
                onClose={() => {
                    setConsultationModification({visible: false});
                    setData({});
                }}
                data={data}
                onAccept={acceptVehicule}
                onUpdate={() => modificationVehicule()}
                onChangeState={state => setConsultationModification({...consultationModification, state: state})}
            >
                <InputText
                    id={"vehBrand"}
                    name={"VehBrand"}
                    label={"Marque"}
                    value={data.vehBrand || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehBrand")}
                />
                <InputText
                    id={"vehModel"}
                    name={"VehModel"}
                    label={"Model"}
                    value={data.vehModel || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehModel")}
                />
                <InputText
                    id={"vehColor"}
                    name={"VehColor"}
                    label={"Couleur"}
                    value={data.vehColor || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehColor")}
                />
                <InputText
                    id={"vehRegistration"}
                    name={"VehRegistration"}
                    label={"Immatriculation"}
                    value={data.vehRegistration || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehRegistration")}
                />
                <InputText
                    id={"vehTypeEssence"}
                    name={"VehTypeEssence"}
                    label={"Type d'essence"}
                    value={data.vehTypeEssence || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehTypeEssence")}
                />
                <InputText
                    id={"vehNumberplace"}
                    name={"VehNumberplace"}
                    label={"Nombre de place"}
                    value={data.vehNumberplace || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehNumberplace")}
                />
                <InputText
                    id={"vehState"}
                    name={"VehState"}
                    label={"Etat"}
                    value={data.vehState || ""}
                    disabled={consultationModification.state === VIEW}
                    onChange={event => updateField(event, "vehState")}
                />
            </ConsultationModification>

            <Supprimer
                title={"Suppression Véhicule"}
                open={supressionVehicule}
                onClose={() => setSupressionVehicule(undefined)}
                onAccept={supprimerVehicule}
                text={"êtes vous sur de vouloir supprimerle(s) véhicule(s) sélectionné(s) ?"}
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
    fetchUpdateVehicule: PropTypes.func
};

export default Vehicule;
