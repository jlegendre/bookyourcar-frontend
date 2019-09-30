import {connect} from "react-redux"
import Accueil from './Accueil.jsx'
import {getProfil} from "../../../redux/reducers/auth";
import {fetchUpdatePassword, fetchUpdateProfil, fetchUserProfil} from "../../../redux/actions/auth";
import {fetchImageUser, fetchPostImageUser} from '../../../redux/actions/image'


const mapStateToProps = state => {
    return {
        profil: getProfil(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProfil: () => dispatch(fetchUserProfil()),
        fetchUpdateProfil: user => dispatch(fetchUpdateProfil(user)),
        fetchUpdatePassword: (password, success) => dispatch(fetchUpdatePassword(password, success)),
        fetchImageUser : callback => dispatch(fetchImageUser(callback)),
        fetchPostImageUser: (file, callback) => dispatch(fetchPostImageUser(file, callback))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Accueil)