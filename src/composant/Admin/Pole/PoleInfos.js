import PoleInfos from "./PoleInfos.jsx";
import {connect} from "react-redux";
import {getDataPage} from "../../../redux/reducers/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchPoleInfos: () => dispatch(fetchPoleInfos())
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        datapage: getDataPage(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PoleInfos)