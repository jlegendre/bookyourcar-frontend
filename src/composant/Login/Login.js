import Login from './Login.jsx'
import {connect} from "react-redux";
import {fetchLoginUser} from "../../redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (username, password) => dispatch(fetchLoginUser(username, password))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
