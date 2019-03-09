import Login from './Login.jsx'
import {connect} from "react-redux";
import {fetchLoginUser} from "../../redux/actions/user";
import {getUser} from "../../redux/reducers/user";
import {getError} from "../../redux/reducers/error";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (input) => dispatch(fetchLoginUser(input.email, input.password))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        user: getUser(state),
        error: getError(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
