import CreateUser from "./CreateUser.jsx";
import {connect} from "react-redux";
import {fetchRegisterUser} from "../../../redux/actions/auth";
import {getToken} from "../../../redux/reducers/auth";
import {fetchPoles} from "../../../redux/actions/datapage";
import {getListPolesForSelect} from "../../../redux/reducers/datapage";
import {setMessage} from "../../../redux/actions/message";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (input, success) => dispatch(fetchRegisterUser(input, success)),
        setMessage: (message) => dispatch(setMessage(message)),
        fetchPoles: () => dispatch(fetchPoles())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        token: getToken(state),
        poles: getListPolesForSelect(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)