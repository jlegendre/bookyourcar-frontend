import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import ConsultationModification, {UPDATE} from '../Action/ConsultationModification';
import Supprimer from "../Action/Supprimer";
import InputText from "../../Commun/Input/InputText";
import UtilisateurAttente from "./Tableau/UtilisateurAttente";
import UtilisateurValide from "./Tableau/UtilisateurValide";

const Utilisateur = props => {

    const {fetchUsersInValidation, fetchUser, userListInWaiting, userList, fetchUsers, userDetail, fetchRefuserUtilisateur, fetchAccepterUtilisateur} = props;
    const [consultationModification, setConsultationModification] = useState({visible: false, state: UPDATE});
    const [refuserUtilisateur, setRefuserUtilisateur] = useState(false);
    const [data, setData] = useState(userDetail || {});
    const [deletedData, setDeletedData] = useState(undefined);

    useEffect(() => {
        fetchUsersInValidation();
        fetchUsers();
    }, [fetchUsersInValidation, fetchUsers]);

    const modificationUser = () => {
        fetchAccepterUtilisateur(data.userId);
        setConsultationModification({visible: false})
    };

    const supprimerUser = () => {
        deletedData.forEach(user => {
            fetchRefuserUtilisateur(user.userId);
        });
        setRefuserUtilisateur(false);
    };

    const openConsultationModification = row => {
        fetchUser(row.userId, data => {
            setData(data)
        });
        setConsultationModification({visible: true, state: UPDATE});
    };

    const updateField = ((event, type) => {
        setData({
            ...data,
            [type]: event.target.value
        });
    });

    return (
        <React.Fragment>

            <UtilisateurAttente
                userList={userListInWaiting}
                setDeletedData={setDeletedData}
                setRefuserUtilisateur={setRefuserUtilisateur}
                openConsultationModification={openConsultationModification}
            />

            <UtilisateurValide
                userList={userList}
                setDeletedData={setDeletedData}
                setRefuserUtilisateur={setRefuserUtilisateur}
                openConsultationModification={openConsultationModification}
            />

            <ConsultationModification
                title={"Utilisateur"}
                open={consultationModification.visible}
                state={consultationModification.state}
                onClose={() => {
                    setConsultationModification({visible: false});
                    setData({});
                }}
                data={data}
                onUpdate={() => modificationUser()}
                onChangeState={state => setConsultationModification({...consultationModification, state: state})}
            >
                <InputText
                    id="userName"
                    name={"UserName"}
                    label="Nom"
                    value={data.userName || ""}
                    disabled
                    onChange={(event => updateField(event, "userName"))}
                />
                <InputText
                    id="userFirstname"
                    name={"UserFirstname"}
                    label="Prénom"
                    value={data.userFirstname || ""}
                    disabled
                    onChange={(event => updateField(event, "userFirstname"))}
                />
                <InputText
                    id="userEmail"
                    name={"UserEmail"}
                    label="Email"
                    value={data.userEmail || ""}
                    disabled
                    onChange={(event => updateField(event, "userEmail"))}
                />
                <InputText
                    id="poleName"
                    name={"PoleName"}
                    label="Pole"
                    value={data.poleName || ""}
                    disabled
                    onChange={(event => updateField(event, "poleName"))}
                />
            </ConsultationModification>

            <Supprimer
                title={"Refuser utilisateur"}
                open={refuserUtilisateur}
                onClose={() => setRefuserUtilisateur(undefined)}
                onAccept={supprimerUser}
                text={"êtes vous sur de vouloir refuser le(s) utilisateur(s) sélectionné(s) ?"}
            />

        </React.Fragment>
    )
};

Utilisateur.propTypes = {
    fetchUsers: PropTypes.func,
    fetchUsersInWaiting: PropTypes.func,
    fetchUser: PropTypes.func,
    userList: PropTypes.array,
    userListInWaiting: PropTypes.array,
    userDetail: PropTypes.object,
    fetchNewPole: PropTypes.func,
    fetchRefuserUtilisateur: PropTypes.func,
    fetchAccepterUtilisateur: PropTypes.func
};

export default Utilisateur;
