import Message from './Message.jsx'
import {connect} from "react-redux";
import {getMessage} from "../../redux/reducers/message";

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        message: getMessage(state)
    }
};

export default connect(mapStateToProps)(Message)
