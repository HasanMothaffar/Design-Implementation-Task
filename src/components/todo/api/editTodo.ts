import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../data/react-query";
import { EditTodoDTO, ITodo } from "../types";

export const useEditTodo = () => {
    const editTodo = async (editedTodo: EditTodoDTO) => {
        // return httpClient.patch("/todos/" + editedTodo.id, editedTodo);
        return Promise.resolve();
    };

    return useMutation(editTodo, {
        onMutate: async (editedTodo) => {
            // Optimistically update to the new value
            // await queryClient.invalidateQueries(["todos"]);

            queryClient.setQueryData<ITodo[]>(["todos"], (oldTodos) => {
                const todoToEdit = oldTodos?.find((todo) => todo.id === editedTodo.id);
                if (todoToEdit) {
                    todoToEdit.completed = editedTodo.completed;
                }

                // const fileteredTodos = oldTodos?.filter((todo) => todo.id !== editedTodo.id) ?? [];
                // const newArray = [todoToEdit, ...fileteredTodos];

                // return newArray;

                return [...oldTodos];
            });
        },
    });
};
