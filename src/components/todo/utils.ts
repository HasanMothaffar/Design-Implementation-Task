import { ITodo } from "./types";
import { ITodoFilters } from "./ui/TodoFilters";

export const getFilteredTodos = (todos: ITodo[] = [], filters: ITodoFilters): ITodo[] => {
    let filteredTodos: ITodo[] = [...todos];

    if (filters.onlyComplete) {
        filteredTodos = filteredTodos.filter((todo) => todo.completed);
    }

    return filteredTodos;
};

export const getPendingTodosCount = (todos: ITodo[] = []) => {
    return todos.reduce((counter, todo) => {
        const amountToIncrement = todo.completed ? 0 : 1;
        return counter + amountToIncrement;
    }, 0);
};
