import VehicleInfos from "./VehicleInfos.jsx";
import {connect} from "react-redux";
import {fetchPoles, fetchVehicleInfos} from "../../../redux/actions/datapage";
import {fetchUpdateVehicle, fetchDeleteVehicle} from "../../../redux/actions/admin";
import {getDetailLocation, getDetailVehicle, getListPolesForSelectByName} from "../../../redux/reducers/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchVehicleInfos : (id, success) => dispatch(fetchVehicleInfos(id, success)),
        fetchUpdateVehicle: (input) => dispatch(fetchUpdateVehicle(input)),
        fetchDeleteVehicle: id => {
            dispatch(fetchDeleteVehicle(id))},
        fetchPoles: () => dispatch(fetchPoles())


    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        detailVehicle: getDetailVehicle(state),
        poles: getListPolesForSelectByName(state),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfos)
