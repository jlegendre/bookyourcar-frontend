import App from './App.jsx'
import {connect} from "react-redux";
import {getToken} from "./redux/reducers/user";


//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        token: getToken(state)
    }
};

export default connect(mapStateToProps)(App)
