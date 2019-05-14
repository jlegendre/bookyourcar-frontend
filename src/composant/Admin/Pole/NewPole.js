import NewPole from "./NewPole.jsx";
import {connect} from "react-redux";
import { fetchAddPole } from "../../../redux/actions/datapage";
import { getToken } from "../../../redux/reducers/auth";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchAddPole: (input) => dispatch(fetchAddPole(input)),
    }
};

    //pour envoyer des objets du store de redux
    const mapStateToProps = (state) => {
        return {
            token: getToken(state)
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(NewPole)