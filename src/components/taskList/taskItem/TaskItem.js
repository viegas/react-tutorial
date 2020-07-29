import React from 'react';
import PropTypes from 'prop-types';

import styles from './TaskItem.module.css';

const TaskItem = ({ text, id, onRemoveItem }) => {
    return (
        <li className={styles.item}>
            <span className={styles.text}>{text}</span>
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
