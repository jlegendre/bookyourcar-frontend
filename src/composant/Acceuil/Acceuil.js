import Acceuil from './Acceuil.jsx'
import {connect} from "react-redux";
import {getAuth} from "../../redux/reducers/auth";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {}
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        user: getAuth(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Acceuil)
