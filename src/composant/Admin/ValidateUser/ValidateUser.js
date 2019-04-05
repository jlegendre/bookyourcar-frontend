import ValidUser from "./ValidateUser.jsx";
import {connect} from "react-redux";
import {fetchUserInValidation} from "../../../redux/actions/datapage";
import {getUserInWaiting} from "../../../redux/reducers/datapage";
import {fetchDeleteUser, fetchValidateUser} from "../../../redux/actions/admin";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchUserInValidation: () => dispatch(fetchUserInValidation()),
        fetchValidateUser: id => dispatch(fetchValidateUser(id)),
        fetchDeleteUser: id => dispatch(fetchDeleteUser(id))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        userInWaiting: getUserInWaiting(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidUser)