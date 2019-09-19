import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import PopupValidateUser from "./PopupValidateUser";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DataTable from 'react-data-table-component';

const Utilisateur = props => {

    const {fetchUserInValidation, userInWaiting, fetchValidateUser, fetchDeleteUser} = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [userSelected, setUserSelected] = useState();

    useEffect(() => {
        fetchUserInValidation();
    }, [fetchUserInValidation]);


    /**
     * Accepte l'utilisateur
     * @param id identifiant de l'utilisateur
     */
    const acceptUser = id => {
        fetchValidateUser(id);
        setPopupOpen(false)
    };

    /**
     * Refuse l'utilisateur
     * @param id identifiant de l'utilisateur
     */
    const refuseUser = id => {
        fetchDeleteUser(id);
        setPopupOpen(false)
    };

    const openUser = row => {
        setUserSelected(row);
        setPopupOpen(true);
    };

    const colonnes = [
        {
            name: <Typography>Nom</Typography>,
            selector: 'userName',
            sortable: true,
            cell: row => <Typography>{row["userName"]}</Typography>
        },
        {
            name: <Typography>Prénom</Typography>,
            selector: 'userFirstname',
            sortable: true,
            cell: row => <Typography>{row["userFirstname"]}</Typography>
        },
        {
            name: <Typography>Email</Typography>,
            selector: 'userEmail',
            sortable: true,
            cell: row => <Typography>{row["userEmail"]}</Typography>
        },
        {
            name: <Typography>Pole</Typography>,
            selector: 'poleName',
            sortable: true,
            cell: row => <Typography>{row["poleName"]}</Typography>
        }
    ];

    return (
        <React.Fragment>
            <Paper>
                <DataTable
                    title={<Typography component={"h4"} variant={"h4"}>Utilisateurs en attente</Typography>}
                    columns={colonnes}
                    data={userInWaiting}
                    onRowClicked={openUser}
                    highlightOnHover
                />
            </Paper>
            <PopupValidateUser
                open={popupOpen}
                onAccept={acceptUser}
                onRefuser={refuseUser}
                onClose={() => setPopupOpen(false)}
                data={userSelected}
            />
        </React.Fragment>
    )
};

Utilisateur.propTypes = {
    fetchUserInValidation: PropTypes.func,
    userInWaiting: PropTypes.array,
    fetchValidateUser: PropTypes.func,
    fetchDeleteUser: PropTypes.func
};

export default Utilisateur