import React, {Component} from 'react'
import * as PropTypes from 'prop-types'

/**
 * Page d'acceuil de l'application
 */
class Acceuil extends Component {
    render() {
        return (
            <div>
                <h3>
                    Bienvenue {this.props.user.username}
                </h3>
            </div>
        )
    }
}

Acceuil.propTypes = {
    user: PropTypes.object
};

export default Acceuil