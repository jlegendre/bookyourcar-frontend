import {connect} from "react-redux"
import Accueil from './Accueil.jsx'
import {getProfil} from "../../../redux/reducers/user";
import {fetchUserProfil, fetchUpdateProfil, fetchUpdatePassword} from "../../../redux/actions/user";


const mapStateToProps = state => {
    return {
        profil: getProfil(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProfil : () => dispatch(fetchUserProfil()),
        fetchUpdateProfil : user => dispatch(fetchUpdateProfil(user)),
        fetchUpdatePassword : (password, success) => dispatch(fetchUpdatePassword(password, success))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Accueil)