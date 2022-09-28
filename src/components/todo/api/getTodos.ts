import { useQuery } from "@tanstack/react-query";
import httpClient from "../../../data/httpClient";
import { ITodo } from "../types";

export const useGetTodos = () => {
    const fetchTodos = async () => {
        const response = await httpClient.get<ITodo[]>("/todos");
        return response.data.slice(0, 4);
    };

    return useQuery<ITodo[]>(["todos"], fetchTodos, {
        structuralSharing: false,
    });
};
