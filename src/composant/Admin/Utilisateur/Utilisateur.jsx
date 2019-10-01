import React, {Fragment, useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import Supprimer from "../Action/Supprimer";
import InputText from "../../Commun/Input/InputText";
import columns from "./columns";
import Table from "../../Commun/Table/Table";
import Popup from "../../Commun/Popup/Popup";

const Utilisateur = props => {

    const {fetchUsersInValidation, fetchUser, userList, fetchUsers, userDetail, fetchRefuserUtilisateur, fetchAccepterUtilisateur} = props;
    const [consultationModification, setConsultationModification] = useState(false);
    const [refuserUtilisateur, setRefuserUtilisateur] = useState(false);
    const [data, setData] = useState(userDetail || {});
    const [state, setState] = useState();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsersInValidation, fetchUsers]);

    const acceptUser = () => {
        fetchAccepterUtilisateur(data.userId);
        setConsultationModification(false)
    };

    const refuseUser = () => {
        fetchRefuserUtilisateur(data.userId);
        setRefuserUtilisateur(false);
        setConsultationModification(false);
    };

    const openConsultationModification = row => {
        fetchUser(row.userId, data => {
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

    return (
        <Fragment>
            {userList && userList.usersInWaiting && userList.usersInWaiting.length > 0 &&
            <Fragment>
                <Table
                    title={"Utilisateurs en attente"}
                    columns={columns}
                    data={userList.usersInWaiting}
                    onClick={data => {
                        setState("attente");
                        openConsultationModification(data)
                    }}
                />
                <div style={{marginBottom: 30}}/>
            </Fragment>
            }

            <Table
                title={"Gestion des utilisateurs"}
                columns={columns}
                data={userList.allUsers}
                onClick={data => {
                    setState("all");
                    openConsultationModification(data)
                }}
            />

            <Popup
                title={"Utilisateur"}
                open={consultationModification}
                onClose={() => {
                    setConsultationModification(false);
                    setData({});
                }}
                firstActionTxt={state === "attente" ? "Refuser" : undefined}
                firstActionFunc={refuseUser}
                secondActionTxt={state === "attente" ? "Accepter" : undefined}
                secondActionFunc={acceptUser}
            >
                <InputText
                    id="userName"
                    name={"UserName"}
                    label="Nom"
                    value={data.userName || ""}
                    onChange={(event => updateField(event, "userName"))}
                />
                <InputText
                    id="userFirstname"
                    name={"UserFirstname"}
                    label="Prénom"
                    value={data.userFirstname || ""}
                    onChange={(event => updateField(event, "userFirstname"))}
                />
                <InputText
                    id="userEmail"
                    name={"UserEmail"}
                    label="Email"
                    value={data.userEmail || ""}
                    onChange={(event => updateField(event, "userEmail"))}
                />
                <InputText
                    id="poleName"
                    name={"PoleName"}
                    label="Pole"
                    value={data.poleName || ""}
                    onChange={(event => updateField(event, "poleName"))}
                />
            </Popup>

            <Supprimer
                title={"Refuser utilisateur"}
                open={refuserUtilisateur}
                onClose={() => setRefuserUtilisateur(undefined)}
                onAccept={refuseUser}
                text={"êtes vous sur de vouloir refuser l'utilisateur sélectionné ?"}
            />

        </Fragment>
    )
};

Utilisateur.propTypes = {
    fetchUsers: PropTypes.func,
    fetchUser: PropTypes.func,
    userList: PropTypes.object,
    userDetail: PropTypes.object,
    fetchNewPole: PropTypes.func,
    fetchRefuserUtilisateur: PropTypes.func,
    fetchAccepterUtilisateur: PropTypes.func
};

export default Utilisateur;
