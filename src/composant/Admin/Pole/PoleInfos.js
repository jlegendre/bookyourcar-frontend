import PoleInfos from "./PoleInfos.jsx";
import {connect} from "react-redux";
import { fetchPoleInfos } from "../../../redux/actions/datapage";
import { fetchUpdatePole } from "../../../redux/actions/datapage";
import { getDetailPoles } from "../../../redux/reducers/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchPoleInfos: (id, success) => dispatch(fetchPoleInfos(id, success)),
        fetchUpdatePole: (input) => dispatch(fetchUpdatePole(input)),
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        detailPole: getDetailPoles(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PoleInfos)