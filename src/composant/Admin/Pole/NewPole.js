import NewPole from "./NewPole.jsx";
import {connect} from "react-redux";
import { fetchAddPole, fetchPoles } from "../../../redux/actions/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = dispatch => {
    return {
        fetchAddPole: (input) => dispatch(fetchAddPole(input)),
        fetchPoles: () => dispatch(fetchPoles())
    }
};

    //pour envoyer des objets du store de redux
    const mapStateToProps = (state) => {
        return {
            
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(NewPole)