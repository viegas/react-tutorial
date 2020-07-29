import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ onSelectAll, onCreateTodo }) => {
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
    onSelectAll: PropTypes.func,
    onCreateTodo: PropTypes.func,
};

Input.defaultProps = {
    onSelectAll: () => {
        console.log('onSelectAll');
    },
    onCreateTodo: (value) => {
        console.log('onCreateTodo', value);
    },
};

export default Input;
