import React, {Fragment} from "react";
import * as PropType from 'prop-types';
import Table from "../../../Commun/Table/Table";
import columns from "../columns";

const UtilisateurAttente = props => {

    const {userList, openConsultationModification, setDeletedData, setRefuserUtilisateur} = props;

    //Si aucun utilisateur en attente, on n'affiche rien

    if (userList.length === 0) {
        return <Fragment/>
    }

    return (
        <Fragment>
            <Table
                title={"Utilisateurs en attente"}
                columns={columns}
                data={userList}
                onClick={openConsultationModification}
                onDelete={data => {
                    setDeletedData(data);
                    setRefuserUtilisateur(true)
                }}
            />
            <div style={{margin: 30}}/>
        </Fragment>
    )
};

UtilisateurAttente.propTypes = {
    userList: PropType.array,
    openConsultationModification: PropType.func,
    setDeletedData: PropType.func,
    setRefuserUtilisateur: PropType.func
};

export default UtilisateurAttente;