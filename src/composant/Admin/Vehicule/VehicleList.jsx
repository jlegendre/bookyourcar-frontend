import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {Button} from "@material-ui/core";
import PopupCreateVehicle from "./Popup/PopupCreateVehicle";
import Paper from "@material-ui/core/Paper";
import DataTable from 'react-data-table-component';
import Typography from "@material-ui/core/Typography";

const VehicleList = props => {

    const {fetchVehicles, listVehicle} = props;

    const [newVehicule, setNewVehicule] = useState(false);
    const [showVehicule, setShowVehicule] = useState(false);
    const [selectedVehicule, setSelectedVehicule] = useState();

    let vehiculeInitialize = {
        vehId: 0,
        vehRegistration: '',
        vehBrand: '',
        vehModel: '',
        vehKm: 0,
        vehDatemec: '',
        vehTypeEssence: '',
        vehColor: '',
        vehNumberplace: '',
        vehIsactive: true,
        poleName: ''
    };

    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles]);


    const colonnes = [
        {
            name: <Typography>Marque</Typography>,
            selector: 'vehBrand',
            sortable: true,
            cell: row => <Typography>{row["vehBrand"]}</Typography>
        },
        {
            name: <Typography>Model</Typography>,
            selector: 'vehModel',
            sortable: true,
            cell: row => <Typography>{row["vehModel"]}</Typography>
        },
        {
            name: <Typography>Couleur</Typography>,
            selector: 'vehColor',
            sortable: true,
            cell: row => <Typography>{row["vehColor"]}</Typography>
        },
        {
            name: <Typography>Immatriculation</Typography>,
            selector: 'vehRegistration',
            sortable: true,
            cell: row => <Typography>{row["vehRegistration"]}</Typography>
        },
        {
            name: <Typography>Type Essence</Typography>,
            selector: 'vehTypeEssence',
            sortable: true,
            cell: row => <Typography>{row["vehTypeEssence"]}</Typography>
        },
        {
            name: <Typography>Nombre de place</Typography>,
            selector: 'vehNumberplace',
            sortable: true,
            cell: row => <Typography>{row["vehNumberplace"]}</Typography>
        },
        {
            name: <Typography>Etat</Typography>,
            selector: 'vehState',
            sortable: true,
            cell: row => <Typography>{row["vehState"]}</Typography>
        }
    ];


    const openVehicule = row => {
        setSelectedVehicule(row);
        setShowVehicule(true);
    };

    return (
        <React.Fragment>

            <div style={{marginBottom: 10}}>
                <Button variant={"contained"} color={"primary"} onClick={() => setNewVehicule(true)}>
                    Ajouter véhicule
                </Button>
            </div>

            <Paper>
                <DataTable
                    title={<Typography component={"h4"} variant={"h4"}>Véhicule</Typography>}
                    columns={colonnes}
                    data={listVehicle}
                    onRowClicked={openVehicule}
                    highlightOnHover
                />
            </Paper>

            <PopupCreateVehicle
                open={newVehicule}
                onClose={() => setNewVehicule(false)}
                data={vehiculeInitialize}
            />

            <PopupCreateVehicle
                open={showVehicule}
                onClose={() => setNewVehicule(false)}
                data={selectedVehicule}/>
        </React.Fragment>
    )
};


VehicleList.propTypes = {
    fetchVehicles: PropTypes.func,
    listVehicle: PropTypes.array
};

export default VehicleList;