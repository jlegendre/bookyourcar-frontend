import React, {Fragment} from 'react'
import {Icon} from "@material-ui/core";

const PopupValidateReservationLeftPart = props => {

    const {data} = props;
    const {locStateId, selectedVehicle} = data;

    const show = () => {
        if (locStateId === 1 || !selectedVehicle) {
            return (
                <Fragment>
                    {!selectedVehicle ? "Aucune liste disponible" : ""}
                </Fragment>
            )
        }

        return (
            <Fragment>
                <div>
                    {selectedVehicle.vehCommonName} {selectedVehicle.registration}
                </div>
                <div>
                    <Icon>ev_station</Icon>{selectedVehicle.fuelName}
                </div>
                <div>
                    <Icon>supervisor_account</Icon> {selectedVehicle.seatCount}
                </div>
            </Fragment>
        )

    };

    return (
        <Fragment>
            <div>
                Véhicule associé :
            </div>
            <div>
                {show()}
            </div>
        </Fragment>
    )
};

export default PopupValidateReservationLeftPart;
