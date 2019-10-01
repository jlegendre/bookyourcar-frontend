import React, {Fragment, useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import ConsultationModification, {UPDATE} from '../Action/ConsultationModification';
import Supprimer from "../Action/Supprimer";
import InputText from "../../Commun/Input/InputText";
import columns from "./columns";
import Table from "../../Commun/Table/Table";

const Utilisateur = props => {

    const {fetchUsersInValidation, fetchUser, userList, fetchUsers, userDetail, fetchRefuserUtilisateur, fetchAccepterUtilisateur} = props;
    const [consultationModification, setConsultationModification] = useState({visible: false, state: UPDATE});
    const [refuserUtilisateur, setRefuserUtilisateur] = useState(false);
    const [data, setData] = useState(userDetail || {});
    const [deletedData, setDeletedData] = useState(undefined);

    useEffect(() => {
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
        <Fragment>

            {userList && userList.usersInWaiting && userList.usersInWaiting.length > 0 &&
            <Fragment>
                <Table
                    title={"Utilisateurs en attente"}
                    columns={columns}
                    data={userList.usersInWaiting}
                    onClick={openConsultationModification}
                    onDelete={data => {
                        setDeletedData(data);
                        setRefuserUtilisateur(true)
                    }}
                />
                <div style={{marginBottom: 30}}/>
            </Fragment>
            }

            <Table
                title={"Gestion des utilisateurs"}
                columns={columns}
                data={userList.allUsers}
                onClick={openConsultationModification}
                onDelete={data => {
                    setDeletedData(data);
                    setRefuserUtilisateur(true)
                }}
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

        </Fragment>
    )
};

Utilisateur.propTypes = {
    fetchUsers: PropTypes.func,
    fetchUser: PropTypes.func,
    userList: PropTypes.array,
    userDetail: PropTypes.object,
    fetchNewPole: PropTypes.func,
    fetchRefuserUtilisateur: PropTypes.func,
    fetchAccepterUtilisateur: PropTypes.func
};

export default Utilisateur;
