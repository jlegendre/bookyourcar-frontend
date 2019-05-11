import StepFinish from './StepFinish.jsx';
import {connect} from "react-redux";
import {getPoleById} from "../../../../redux/reducers/datapage";


//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        getPole: (identifiant) => getPoleById(state, identifiant)
    }
};

export default connect(mapStateToProps)(StepFinish)
