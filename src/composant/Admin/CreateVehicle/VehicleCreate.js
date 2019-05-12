import VehicleInfos from "./VehicleCreate.jsx";
import {connect} from "react-redux";
import { fetchCreateVehicle} from "../../../redux/actions/admin";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchCreateVehicle: (input) => {
            // console.log(input);
            dispatch(fetchCreateVehicle(input))
        }
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfos)
