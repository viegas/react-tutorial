import React from 'react';
import TaskItem from './taskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ list, onRemoveItem, onUpdateItem }) => {
    if (!list.length) {
        return null;
    }

    return (
        <ol className={styles.list}>
            {list.map((item) => (
                <TaskItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    onRemoveItem={onRemoveItem}
                    onUpdateItem={onUpdateItem}
                />
            ))}
        </ol>
    );
};

export default TaskList;
