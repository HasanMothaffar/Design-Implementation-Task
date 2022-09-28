import { useMutation } from "@tanstack/react-query";
import httpClient from "../../../data/httpClient";
import { queryClient } from "../../../data/react-query";
import { ITodo } from "../types";

export const useDeleteTodo = () => {
    const deleteTodo = async (id: number) => {
        return httpClient.delete("/todos/" + id);
    };

    return useMutation(deleteTodo, {
        onSuccess: (_, id) => {
            queryClient.setQueryData<ITodo[]>(["todos"], (oldTodos) =>
                oldTodos?.filter((todo) => todo.id !== id)
            );
        },
    });
};
