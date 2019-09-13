import CreateUser from "./UpdateUser.jsx";
import {connect} from "react-redux";
import { fetchUserInfos, fetchUpdateUser, getDetailUser} from "../../../redux/actions/user";
import {getToken} from "../../../redux/reducers/auth";
import {fetchPoles} from "../../../redux/actions/datapage";
import { setMessage } from "../../../redux/actions/message";



//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUpdateUser: (input) => dispatch(fetchUpdateUser(input)),
        fetchUserInfos: (id, success) => dispatch(fetchUserInfos(id, success)),
        setMessage: (message) => dispatch(setMessage(message)),
        fetchPoles: () => dispatch(fetchPoles())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        token: getToken(state),
        poles: getListPolesForSelect(state),
        detailUser: getDetailUser(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)