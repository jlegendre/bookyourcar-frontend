import InputText from './InputText.jsx'
import {connect} from "react-redux";
import {getError} from "../../redux/reducers/error";

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        error: getError(state)
    }
};

export default connect(mapStateToProps)(InputText)
