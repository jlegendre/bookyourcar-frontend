import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Page d'acceuil de l'application
 */
class Acceuil extends Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.clearUser();
    }

    render() {
        return (
            <div>
                Username : {this.props.user.username} <br/>
                Token : {this.props.user.token}

                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

Acceuil.propTypes = {
    user: PropTypes.object,
    clearUser: PropTypes.func
};

export default Acceuil