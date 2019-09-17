import ChangePassword from "./ChangePassword.jsx";
import {connect} from "react-redux";
import {fetchSaveChangePassword, fetchVerifToken} from "../../../redux/actions/auth";
import {getToken} from "../../../redux/reducers/auth";
import {setMessage} from "../../../redux/actions/message";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        fetchVerifToken: (input, callback) => dispatch(fetchVerifToken(input, callback)),
        saveChangePassword: (input, callback) => dispatch(fetchSaveChangePassword(input, callback)),
        setMessage: (message) => dispatch(setMessage(message))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        token: getToken(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)