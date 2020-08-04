import axios from 'axios';
import api from '../../api';

let cancelToken;

export const mockFunction = (str) => str

export default (todoList, setTodoList, handleError = mockFunction) => {
    const useCreateTodo = async (text) => {
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel('Operation canceled due to new request.');
        }

        cancelToken = axios.CancelToken.source();

        api.post('todos', { text });

        setTodoList(
            todoList.concat({
                text,
                id: Date.now(),
                disabled: true,
            })
        );

        const get = await api
            .get('todos', {
                cancelToken: cancelToken.token,
            })
            .catch((e) => handleError(e));

        if (get && get.data) {
            setTodoList(get.data);
        }
    };

    const useUpdateTodo = async (id, text) => {
        api.patch(`todos/${id}`, { text });
        const newList = todoList.map((i) => (i.id === id ? { id, text } : i));
        setTodoList(newList);
    };

    const useRemoveTodo = async (id) => {
        api.delete(`todos/${id}`);
        setTodoList(todoList.filter((i) => i.id !== id));
    };

    return { useCreateTodo, useUpdateTodo, useRemoveTodo };
};

// export const useFetch = (url) => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [hasError, setHasError] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setHasError(false);
//             setIsLoading(true);

//             try {
//                 let result = await fetch(url);
//                 result = await result.json();
//                 setData(result);
//             } catch (error) {
//                 setHasError(true);
//             }

//             setIsLoading(false);
//         };

//         fetchData();
//     }, [url]);

//     return [data, isLoading, hasError];
// };
