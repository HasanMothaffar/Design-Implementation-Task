import { useMutation } from "@tanstack/react-query";
import httpClient from "../../../data/httpClient";
import { queryClient } from "../../../data/react-query";
import { EditTodoDTO, ITodo } from "../types";

export const useEditTodo = () => {
    const editTodo = async (editedTodo: EditTodoDTO) => {
        return httpClient.patch("/todos/" + editedTodo.id, editedTodo);
    };

    return useMutation(editTodo, {
        onMutate: async (editedTodo) => {
            queryClient.setQueryData<ITodo[]>(["todos"], (oldTodos) => {
                const todoToEdit = oldTodos?.find((todo) => todo.id === editedTodo.id);
                if (todoToEdit) {
                    todoToEdit.completed = editedTodo.completed;
                }

                return [...oldTodos];
            });
        },
    });
};
