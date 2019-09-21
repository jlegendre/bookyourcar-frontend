import VehicleList from "./VehicleList.jsx";
import {connect} from "react-redux";
import {fetchVehicles} from "../../../redux/actions/datapage";
import {getListVehicles} from "../../../redux/reducers/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchVehicles: () => dispatch(fetchVehicles())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        listVehicle: getListVehicles(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList)