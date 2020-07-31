import { useState, useEffect } from 'react';
import api from '../../api';

export default (todoList, setTodoList) => {
    const useCreateTodo = async (text) => {
        
        api.post('todos', {
            text,
        });
        
        setTodoList(todoList.concat({
            text,
            id: Date.now(),
            disabled: true
        }));

        const get = await api.get('todos');
        setTodoList(get.data);
    };

    const useUpdateTodo = (id, text) => {
        const newList = todoList.map((i) => (i.id === id ? { id, text } : i));
        setTodoList(newList);
    };

    const useRemoveTodo = (id) => {
        setTodoList(todoList.filter((i) => i.id !== id));
    };

    return { useCreateTodo, useUpdateTodo, useRemoveTodo };
};

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setHasError(false);
            setIsLoading(true);

            try {
                let result = await fetch(url);
                result = await result.json();
                setData(result);
            } catch (error) {
                setHasError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [data, isLoading, hasError];
};
