import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import Title from '../title/Title';
import Input from '../input/Input';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
import Box from '../box/Box';

import useTodoHooks from './App.hooks';
import api from '../../api';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFn = async () => {
            setLoading(true);
            const { data } = await api.get('todos');
            setTodoList(data);
            setLoading(false);
        };

        fetchFn();
    }, []);
    
    
    const { useCreateTodo, useUpdateTodo, useRemoveTodo } = useTodoHooks(
        todoList,
        setTodoList
    );

    return (
        <div className={styles.app}>
            <Title />
            <Box>
                <Input onCreateTodo={useCreateTodo} />
                {loading ? (
                    <span>LOADING....</span>
                ) : (
                    <TaskList
                        list={todoList}
                        onRemoveItem={useRemoveTodo}
                        onUpdateItem={useUpdateTodo}
                    />
                )}

                <Footer size={todoList.length} />
            </Box>
        </div>
    );
};

export default App;
