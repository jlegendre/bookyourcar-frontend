import PoleList from "./Pole.jsx";
import {connect} from "react-redux";
import {fetchDeletePole, fetchNewPole, fetchPole, fetchPoles, fetchUpdatePole} from "../../../redux/actions/pole";
import {getPoleDetail, getPoleList} from "../../../redux/reducers/datapage";

//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchPoles: () => dispatch(fetchPoles()),
        fetchPole: id => dispatch(fetchPole(id)),
        fetchNewPole: (pole, callback) => dispatch(fetchNewPole(pole, callback)),
        fetchDeletePole: id => dispatch(fetchDeletePole(id)),
        fetchUpdatePole: (id, pole) => dispatch(fetchUpdatePole(id, pole))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {
        poleList: getPoleList(state),
        poleDetail: getPoleDetail(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PoleList)