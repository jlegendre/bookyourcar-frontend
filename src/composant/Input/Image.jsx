import React from 'react';
import * as PropTypes from 'prop-types';

import config from './../../config';

/**
 * Composant image qui va chercher les images sur le serveur
 */
const Image = props => {

    const {name, height, width} = props;

    return (
        <img
            src={`${config.images}/${name}`}
            alt={name}
            height={height}
            width={width}
        />
    )
};

Image.propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
};

export default Image;