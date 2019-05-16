import InputDate from './InputDate.jsx';
import {connect} from "react-redux";
import {getMessage} from "../../../redux/reducers/message";


//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        message: getMessage(state)
    }
};

export default connect(mapStateToProps)(InputDate);