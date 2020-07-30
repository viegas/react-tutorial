import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ onCreateTodo, onSelectAll }) => {
    const handleKeyPress = ({ key, target }) => {
        if (key === 'Enter' && target.value !== '') {
            onCreateTodo(target.value);
            target.value = '';
        }
    };

    return (
        <div className={styles.wrapper}>
            <input type="checkbox" onClick={onSelectAll} />
            <input
                type="text"
                className={styles.input}
                placeholder={'What needs to be done?'}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

Input.propTypes = {
    onCreateTodo: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func,
};

Input.defaultProps = {
    onSelectAll: (str) => {
        return str;
    },
};

export default Input;
