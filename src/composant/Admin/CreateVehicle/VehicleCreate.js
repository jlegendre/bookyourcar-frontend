import VehicleInfos from "./VehicleCreate.jsx";
import {connect} from "react-redux";
import { fetchCreateVehicle} from "../../../redux/actions/admin";
import {fetchPoles} from "../../../redux/actions/datapage";
import {getListPolesForSelectByName} from "../../../redux/reducers/datapage";

//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchCreateVehicle: (input) => {dispatch(fetchCreateVehicle(input))},
        fetchPoles: () => dispatch(fetchPoles())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        poles: getListPolesForSelectByName(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfos)
