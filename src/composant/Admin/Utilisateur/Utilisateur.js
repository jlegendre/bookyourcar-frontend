import ValidUser from "./Utilisateur.jsx";
import {connect} from "react-redux";
import {fetchUserInValidation} from "../../../redux/actions/user";
import {getUserInWaiting} from "../../../redux/reducers/user";
import {fetchDeleteUser, fetchValidateUser} from "../../../redux/actions/user";


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