import { AnimatePresence } from "framer-motion";
import { ITodo } from "../types";
import Todo from "./Todo";

interface TodoListProps {
    todos: ITodo[] | undefined;
}

const TodoList = ({ todos = [] }: TodoListProps) => {
    return (
        <AnimatePresence>
            {todos.map((todoData) => (
                <Todo key={todoData.id} {...todoData} />
            ))}
        </AnimatePresence>
    );
};
export default TodoList;
