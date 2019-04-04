import ValidUser from "./ValidateUser.jsx";
import {connect} from "react-redux";
import {fetchUserInValidation} from "../../../redux/actions/datapage";
import {getDataPage} from "../../../redux/reducers/datapage";
import {fetchValidateUser} from "../../../redux/actions/admin";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchUserInValidation : () => dispatch(fetchUserInValidation()),
        fetchValidateUser : id => dispatch(fetchValidateUser(id))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        datapage: getDataPage(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidUser)