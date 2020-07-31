export default (todoList, setTodoList) => {
    const useCreateTodo = (text) => {
        setTodoList(todoList.concat({ id: Date.now(), text }));
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
