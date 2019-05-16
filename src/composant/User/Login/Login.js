import Login from './Login.jsx'
import {connect} from "react-redux";
import {fetchLoginUser} from "../../../redux/actions/auth";
import {getAuth, getToken} from "../../../redux/reducers/auth";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (input) => dispatch(fetchLoginUser(input.email, input.password))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        user: getAuth(state),
        token: getToken(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
