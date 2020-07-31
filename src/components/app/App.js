import React, { useState } from 'react';
import styles from './App.module.css';

import Title from '../title/Title';
import Input from '../input/Input';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
import Box from '../box/Box';

import useTodoHooks from './App.hooks';

const initValue = [{ id: 0, text: 'My first todo' }];

const App = () => {
    const [todoList, setTodoList] = useState(initValue);

    const { useCreateTodo, useUpdateTodo, useRemoveTodo } = useTodoHooks(
        todoList,
        setTodoList
    );

    return (
        <div className={styles.app}>
            <Title />
            <Box>
                <Input onCreateTodo={useCreateTodo} />
                <TaskList
                    list={todoList}
                    onRemoveItem={useRemoveTodo}
                    onUpdateItem={useUpdateTodo}
                />
                <Footer size={todoList.length} />
            </Box>
        </div>
    );
};

export default App;
