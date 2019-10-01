import React, {Fragment, useState} from 'react'
import {Icon} from "@material-ui/core";
import InputSelect from '../../Input/InputSelect'

const PopupValidateReservationLeftPart = props => {

    const {data, setData, updateable} = props;
    const {locStateId, selectedVehicle} = data;

    const updateVehicle = event => {
        data.selectedVehicle = event.target.value;
        setData(data);
    };

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
        } else if ((locStateId === 0 || locStateId === 2) && updateable) {
            return (
                    <InputSelect
                        fullWidth={true}
                        data={vehList}
                        name={'Vehicules disponibles'}
                        label={'Vehicules disponibles'}
                        value={data.selectedVehicle || ''}
                        onChange={(event) => updateVehicle(event)}
                        id={'vehSelected'}/>
            )
        }

        return (
            <Fragment>
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

            </Fragment>
        )

    };

    return (
        <Fragment>
            <div>
                Véhicule associé : {data.selectedVehicle !== null ? data.selectedVehicle.vehCommonName: "Aucun"}
            </div>
            <div>
                {show()}
            </div>
        </Fragment>
    )
};

export default PopupValidateReservationLeftPart;
