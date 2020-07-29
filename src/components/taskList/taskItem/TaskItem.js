import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './TaskItem.module.css';

const TaskItem = ({ text, id, onRemoveItem, onUpdateItem }) => {
    const [editing, setEditing] = useState(false);
    const [newValue, setNewValue] = useState(text);

    const node = useRef();

    const handleChange = ({ key }) => {
        if (key === 'Enter' && newValue !== '') {
            onUpdateItem(id, newValue);
            setEditing(false);
        }
    };

    const handleClickOutside = (ref) => {
        if (node.current && !node.current.contains(ref.target)) {
            setEditing(false);
            setNewValue(text);
        }

        return;
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <li className={styles.item}>
            {editing ? (
                <input
                    autoFocus
                    ref={node}
                    value={newValue}
                    type="text"
                    className={styles.input}
                    onChange={({ target }) => setNewValue(target.value)}
                    onKeyPress={handleChange}
                />
            ) : (
                <span
                    onDoubleClick={() => setEditing(true)}
                    className={styles.text}
                >
                    {text}
                </span>
            )}
            <button
                onClick={() => onRemoveItem(id)}
                className={styles.deleteButton}
            >
                ×
            </button>
        </li>
    );
};

TaskItem.propTypes = {
    text: PropTypes.string.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};

export default TaskItem;
