import React, {Fragment} from 'react'
import {Icon, Typography} from "@material-ui/core";
import InputSelect from '../../Input/InputSelect'

const PopupValidateReservationLeftPart = props => {

    const {data, updateable, setDataToUpdate, dataToUpdate} = props;
    const {locStateId, selectedVehicle} = data;


    const updateVehicle = event => {
        const locUpdate = {locId: data.locId, vehId: event.target.value};
        setDataToUpdate(locUpdate);
    };

    const detailVeh =( <Fragment>
        {selectedVehicle && <Fragment>
            <div>{selectedVehicle.vehCommonName} {selectedVehicle.registration}

            </div>
            <div>
                <Icon>ev_station</Icon>{selectedVehicle.fuelName}
            </div>
            <div>
                <Icon>supervisor_account</Icon> {selectedVehicle.seatCount}
            </div>
        </Fragment>}

    </Fragment>)

    const show = () => {
        let vehList = [];
        data && data.availableVehicles && data.availableVehicles.forEach((vehicle) => {
            vehList.push({label: vehicle.vehCommonName, value: vehicle.vehId});
        });
        if (locStateId === 1) {
            return (
                <Fragment>
                    {!selectedVehicle ? "Aucune liste disponible" : ""}
                </Fragment>
            )
        } else if ((locStateId === 0 || locStateId === 2) && updateable && vehList.length > 0) {
            return (
                    <InputSelect
                        fullWidth={true}
                        data={vehList}
                        name={'Vehicules disponibles'}
                        label={'Vehicules disponibles'}
                        value={dataToUpdate.vehId || ''}
                        onChange={(event) => updateVehicle(event)}
                        id={'vehSelected'}/>
            )
        } else if(vehList.length === 0){
            return (
                <Fragment>
                    {selectedVehicle &&
                    <Typography style={{marginTop: 20, color: "red"}}>Aucun autre véhicule n'est disponible à ces dates</Typography>}
                    {!selectedVehicle &&
                    <Typography style={{marginTop: 20, color: "red"}}>Aucun véhicule n'est disponible à ces dates</Typography>}
                </Fragment>
            )
        }
        return {detailVeh}


    };

    return (
        <Fragment>
            <div>
                Véhicule associé : {data.selectedVehicle !== null ? '': "Aucun"}
            </div>
            <div>
                {selectedVehicle && detailVeh}
                {show()}

            </div>
        </Fragment>
    )
};

export default PopupValidateReservationLeftPart;
