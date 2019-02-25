import Acceuil from './Acceuil.jsx'
import {connect} from "react-redux";
import {getUser} from "../../redux/reducers/user";
import {setUserEmpty} from "../../redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        clearUser: () => dispatch(setUserEmpty())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        user: getUser(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Acceuil)
