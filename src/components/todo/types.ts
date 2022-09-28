export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface AddTodoDTO {
    title: string;
    completed: boolean;
}

export interface EditTodoDTO {
    id: number;
    completed: boolean;
}
