import {connect} from "react-redux";
import {getPlanning} from "../../../redux/reducers/planning";
import {fetchPlanningVehicule} from '../../../redux/actions/planning'
import PopupPlanning from "./Planning.jsx";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchPlanning: date => dispatch(fetchPlanningVehicule(date))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        planning: getPlanning(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupPlanning)