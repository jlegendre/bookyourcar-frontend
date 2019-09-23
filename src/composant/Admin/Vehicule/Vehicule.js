import Vehicule from "./Vehicule.jsx";
import {connect} from "react-redux";
import {getListPolesForSelect, getVehiculeDetail, getVehiculeList} from "../../../redux/reducers/datapage";
import {
    fetchDeleteVehicule,
    fetchNewVehicule,
    fetchUpdateVehicule,
    fetchVehicule,
    fetchVehicules
} from "../../../redux/actions/vehicule";
import {fetchPoles} from "../../../redux/actions/pole";

//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchVehicules: () => dispatch(fetchVehicules()),
        fetchVehicule: (id, callback) => dispatch(fetchVehicule(id, callback)),
        fetchNewVehicule: (pole, callback) => dispatch(fetchNewVehicule(pole, callback)),
        fetchDeleteVehicule: id => dispatch(fetchDeleteVehicule(id)),
        fetchUpdateVehicule: (id, pole) => dispatch(fetchUpdateVehicule(id, pole)),
        fetchPoles: () => dispatch(fetchPoles())

    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        vehiculeList: getVehiculeList(state),
        vehiculeDetail: getVehiculeDetail(state),
        poles: getListPolesForSelect(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicule)