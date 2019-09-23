import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import PopupValidateReservation from "./PopupValidateReservation/PopupValidateReservation";
import DataTable from 'react-data-table-component';
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import {formatDate} from "../../../../utils/dateUtils";


const LocationList = props => {

    const {locations, fetchDetailLocation} = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);

    const colonnes = [
        {
            name: <Typography>Utilisateur</Typography>,
            selector: 'userFriendlyName',
            sortable: true,
            cell: row => <Typography>{row['userFriendlyName']}</Typography>
        },
        {
            name: <Typography>Date début</Typography>,
            selector: 'dateDebutResa',
            sortable: true,
            cell: row => <Typography>{ formatDate(new Date(row['dateDebutResa']))}</Typography>
        },
        {
            name: <Typography>Date fin</Typography>,
            selector: 'dateFinResa',
            sortable: true,
            cell: row => <Typography>{ formatDate(new Date(row['dateFinResa']))}</Typography>
        },
        {
            name: <Typography>Véhicule</Typography>,
            selector: 'vehicleFriendlyName',
            sortable: true,
            cell: row => <Typography>{row['vehicleFriendlyName']}</Typography>
        },
        {
            name: <Typography>Etat</Typography>,
            selector: 'locationState',
            sortable: true,
            cell: row => <Typography>{row['locationState']}</Typography>
        }
    ];

    const openLocation = row => {
        fetchDetailLocation(row.locationId, success => {
            setCurrentLocation(success);
            setPopupOpen(true);
        });
    };

    return (
        <React.Fragment>

            <Paper>
                <DataTable
                    title={<Typography component={"h4"} variant={"h4"}>Locations</Typography>}
                    columns={colonnes}
                    data={locations}
                    onRowClicked={openLocation}
                    highlightOnHover
                />
            </Paper>

            <PopupValidateReservation
                open={popupOpen}
                onClose={() => setPopupOpen(false)}
                data={currentLocation}
            />
        </React.Fragment>
    )
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    completeView: PropTypes.bool,
    fetchDetailLocation: PropTypes.func
};

export default LocationList;
