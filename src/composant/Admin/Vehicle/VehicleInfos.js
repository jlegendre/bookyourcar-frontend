import VehicleInfos from "./VehicleInfos.jsx";
import {connect} from "react-redux";
import {fetchVehicleInfos} from "../../../redux/actions/datapage";
import {getDetailVehicle} from "../../../redux/reducers/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchVehicleInfos : id => dispatch(fetchVehicleInfos(id))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        detailVehicle: getDetailVehicle(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfos)