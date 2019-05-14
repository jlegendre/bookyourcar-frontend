import ValidateReservation from "./ValidateReservation.jsx";
import {connect} from "react-redux";
import {fetchGetLocation} from "../../../redux/actions/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchGetLocation: (id, success) => dispatch(fetchGetLocation(id, success))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservation)
