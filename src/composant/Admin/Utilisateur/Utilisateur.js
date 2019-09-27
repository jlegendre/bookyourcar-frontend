import ValidUser from "./Utilisateur.jsx";
import {connect} from "react-redux";
import {fetchUserInValidation} from "../../../redux/actions/user";
import {getUserDetail, getUserInWaiting} from "../../../redux/reducers/user";
import {fetchDeleteUser, fetchValidateUser, fetchUser} from "../../../redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUserInValidation()),
        fetchUser : (id, callback) => dispatch(fetchUser(id, callback)),
        fetchAccepterUtilisateur: id => dispatch(fetchValidateUser(id)),
        fetchRefuserUtilisateur: id => dispatch(fetchDeleteUser(id))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        userList: getUserInWaiting(state),
        userDetail: getUserDetail(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidUser)