import {connect} from "react-redux"
import Accueil from './Accueil.jsx'
import {getProfil} from "../../../redux/reducers/user";
import {fetchUserProfil, fetchUpdateProfil} from "../../../redux/actions/user";


const mapStateToProps = state => {
    return {
        profil: getProfil(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProfil : () => dispatch(fetchUserProfil()),
        fetchUpdateProfil : user => dispatch(fetchUpdateProfil(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accueil)