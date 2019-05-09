import BookNewCar from './BookNewCar.jsx'
import {connect} from "react-redux";
import {fetchNewLocation} from "../../../redux/actions/datapage";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewLocation: (input) => dispatch(fetchNewLocation(input))
    }
};

//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(BookNewCar)
