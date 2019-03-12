import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Page d'acceuil de l'application
 */
class Acceuil extends Component {
    render() {
        return (
            <div>
                Username : {this.props.user.username} <br/>
                Token : {this.props.user.token}
            </div>
        )
    }
}

Acceuil.propTypes = {
    user: PropTypes.object
};

export default Acceuil