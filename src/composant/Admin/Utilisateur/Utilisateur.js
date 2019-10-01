import ValidUser from "./Utilisateur.jsx";
import {connect} from "react-redux";
import {fetchUserInValidation, fetchUsers} from "../../../redux/actions/user";
import {getUserDetail, getUserInWaiting, getUsers} from "../../../redux/reducers/user";
import {fetchDeleteUser, fetchValidateUser, fetchUser} from "../../../redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchUsersInValidation: () => dispatch(fetchUserInValidation()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser : (id, callback) => dispatch(fetchUser(id, callback)),
        fetchAccepterUtilisateur: id => dispatch(fetchValidateUser(id)),
        fetchRefuserUtilisateur: id => dispatch(fetchDeleteUser(id))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        userList: getUsers(state),
        userListInWaiting: getUserInWaiting((state)),
        userDetail: getUserDetail(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidUser)