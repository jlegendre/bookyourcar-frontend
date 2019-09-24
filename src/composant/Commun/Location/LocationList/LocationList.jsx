import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import PopupValidateReservation from "./PopupValidateReservation/PopupValidateReservation";
import DataTable from 'react-data-table-component';
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import {formatDate} from "../../../../utils/dateUtils";


const LocationList = props => {

    const {locations, fetchDetailLocation, updateFetchLocation} = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);


    /**
     * Accepte la location
     * @param location location a transmettre
     */
    const acceptLocation = (location) => {
        updateFetchLocation(location.locId, location.vehicleId, 'Validate');
        setPopupOpen(false);
    };
    /**
     * Mets a jour la location
     * @param location location a transmettre
     */
    const updateLocation = (location) => {
        updateFetchLocation(location.locId, location.vehicleId, 'Update');
        setPopupOpen(false);
    };

    /**
     * Démarre la location
     * @param location location a transmettre
     */
    const startLocation = location => {
        updateFetchLocation(location.locId, null, 'Start');
        setPopupOpen(false);
    };

    /**
     * Met fin a la location
     * @param location location a transmettre
     */
    const endLocation = location => {
        updateFetchLocation(location.locId, null, 'Finish');
        setPopupOpen(false);
    };

    /**
     * Refuse la location
     * @param location location a transmettre
     */
    const refuseLocation = location => {
        updateFetchLocation(location.locId, null, 'Cancel');
        setPopupOpen(false)
    };


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
            cell: row => <Typography>{formatDate(new Date(row['dateDebutResa']))}</Typography>
        },
        {
            name: <Typography>Date fin</Typography>,
            selector: 'dateFinResa',
            sortable: true,
            cell: row => <Typography>{formatDate(new Date(row['dateFinResa']))}</Typography>
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
                onAccept={acceptLocation}
                onRefuser={refuseLocation}
                onStart={startLocation}
                onFinish={endLocation}
                onUpdate={updateLocation}
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
