import { Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import { useGetTodos } from "./api/getTodos";
import AddTodoForm from "./ui/AddTodoForm";
import Loader from "./ui/Loader";
import TodoFilters, { ITodoFilters } from "./ui/TodoFilters";
import TodoList from "./ui/TodoList";
import { getFilteredTodos, getPendingTodosCount } from "./utils";

const TodoApplication = () => {
    const [todoFilters, setTodoFilters] = useState<ITodoFilters>({
        onlyComplete: false,
    });

    const { data: todos, isLoading } = useGetTodos();

    const todosToShow = getFilteredTodos(todos, todoFilters);
    const pendingTodosCount = getPendingTodosCount(todosToShow);

    return (
        <BaseSection>
            <BaseContainer
                containerProps={{
                    position: "relative",
                }}
            >
                <Heading as="h2" mb={10} textAlign="center">
                    Todo Application
                </Heading>

                <Text mb={2} fontSize="xl">
                    Pending todos:{" "}
                    <Text as="span" fontWeight="bold">
                        {pendingTodosCount}
                    </Text>
                </Text>

                <AddTodoForm />

                <TodoFilters onFilterChange={setTodoFilters} />

                {isLoading ? (
                    <Loader position="absolute" top={0} right={"1%"} />
                ) : (
                    <TodoList todos={todosToShow} />
                )}
            </BaseContainer>
        </BaseSection>
    );
};
export default TodoApplication;
