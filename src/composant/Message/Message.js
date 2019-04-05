import Message from './Message.jsx'
import {connect} from "react-redux";
import {getMessage} from "../../redux/reducers/message";
import {setNoMessage} from "../../redux/actions/message";

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        message: getMessage(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(setNoMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
