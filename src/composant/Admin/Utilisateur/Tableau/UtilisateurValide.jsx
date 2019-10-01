import React from "react";
import * as PropType from 'prop-types';
import Table from "../../../Commun/Table/Table";
import columns from "../columns";

const UtilisateurValide = props => {

    const {userList, openConsultationModification, setDeletedData, setRefuserUtilisateur} = props;

    return (
        <Table
            title={"Gestion des utilisateurs"}
            columns={columns}
            data={userList}
            onClick={openConsultationModification}
            onDelete={data => {
                setDeletedData(data);
                setRefuserUtilisateur(true)
            }}
        />
    )
};

UtilisateurValide.propTypes = {
    userList: PropType.array,
    openConsultationModification: PropType.func,
    setDeletedData: PropType.func,
    setRefuserUtilisateur: PropType.func
};

export default UtilisateurValide;