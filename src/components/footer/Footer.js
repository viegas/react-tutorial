import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css'

const Footer = ({ size }) => {
    if(!size) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <span>{`Items left: ${size}`}</span>
        </div>
    );
};


Footer.propTypes = {
    size: PropTypes.number,
};

Footer.defaultProps = {
    size: 0,
}

export default Footer;
