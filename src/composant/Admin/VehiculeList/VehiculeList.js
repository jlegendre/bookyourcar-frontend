import VehiculeList from "./VehiculeList.jsx";
import {connect} from "react-redux";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {}
};

//pour envoyer des objets du store de redux
const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiculeList)