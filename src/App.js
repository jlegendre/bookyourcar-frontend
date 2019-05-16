import App from './App.jsx'
import {connect} from "react-redux";
import {getRole, getToken} from "./redux/reducers/auth";
import {getProfil} from "./redux/reducers/user";
import {fetchUserProfil} from "./redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUserProfil())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        token: getToken(state),
        role: getRole(state),
        user: getProfil(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
