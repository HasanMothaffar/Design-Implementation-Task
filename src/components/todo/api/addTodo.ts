import { useMutation } from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import uuid4 from "uuid4";
import httpClient from "../../../data/httpClient";
import { queryClient } from "../../../data/react-query";
import { AddTodoDTO, ITodo } from "../types";

export const useAddTodo = () => {
    const addTodo = async (newTodo: AddTodoDTO) => {
        const response = await httpClient.post<ITodo>("/todos", newTodo);
        return response.data;
    };

    return useMutation(addTodo, {
        onSuccess: (_, newTodo) => {
            queryClient.setQueryData<ITodo[]>(["todos"], (old) =>
                old?.concat({
                    ...newTodo,
                    id: uuid4(),
                })
            );
        },
    });
};
