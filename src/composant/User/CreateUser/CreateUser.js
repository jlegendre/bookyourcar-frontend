import CreateUser from "./CreateUser.jsx";
import {connect} from "react-redux";
import {fetchRegisterUser} from "../../../redux/actions/auth";
import {getToken} from "../../../redux/reducers/auth";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser : (input) => dispatch(fetchRegisterUser(input.email, input.confirmPassword, input.password, input.name, input.firstName))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        token: getToken(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)