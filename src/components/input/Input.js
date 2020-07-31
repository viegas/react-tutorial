import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
import api from '../../api';

const CustomHook = (callback) => {
    const [isSaving, setSaving] = useState(false);

    const sendPost = async (text) => {
        setSaving(true)
        await api.post('todos', { text });
        callback();
        setSaving(false)
    };

    return [isSaving, sendPost];
};

const Input = ({ onCreateTodo, onSelectAll }) => {

    const [ isSaving, sendPost ] = CustomHook(onCreateTodo)

    const handleKeyPress = async ({ key, target }) => {
        if (key === 'Enter' && target.value !== '') {
            await sendPost(target.value);
            target.value = '';
        }
    };

    return (
        <div className={styles.wrapper}>
            <input type="checkbox" onClick={onSelectAll} />
            <input
                disabled={isSaving}
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
