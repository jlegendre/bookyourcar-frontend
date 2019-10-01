import Utilisateur from "./Utilisateur.jsx";
import {connect} from "react-redux";
import {fetchDeleteUser, fetchUser, fetchUsers, fetchValidateUser} from "../../../redux/actions/user";
import {getUserDetail, getUsers} from "../../../redux/reducers/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (id, callback) => dispatch(fetchUser(id, callback)),
        fetchAccepterUtilisateur: id => dispatch(fetchValidateUser(id)),
        fetchRefuserUtilisateur: id => dispatch(fetchDeleteUser(id))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        userList: getUsers(state),
        userDetail: getUserDetail(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Utilisateur)