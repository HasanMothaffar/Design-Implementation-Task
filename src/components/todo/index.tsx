import { Checkbox, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import { useGetTodos } from "./api/getTodos";
import AddTodoForm from "./ui/AddTodoForm";
import Loader from "./ui/Loader";
import TodoList from "./ui/TodoList";
import { getFilteredTodos, getPendingTodosCount } from "./utils";

const TodoApplication = () => {
    const [showOnlyComplete, setShowOnlyComplete] = useState(false);

    const { data: todos, isFetching } = useGetTodos();

    const todosToShow = getFilteredTodos(todos, {
        onlyComplete: showOnlyComplete,
    });

    const pendingTodosCount = getPendingTodosCount(todosToShow);

    return (
        <BaseSection>
            <BaseContainer>
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

                <Checkbox
                    mb={2}
                    checked={showOnlyComplete}
                    onChange={(e) => setShowOnlyComplete(e.target.checked)}
                >
                    Show only complete
                </Checkbox>

                {isFetching && <Loader />}
                <TodoList todos={todosToShow} />
            </BaseContainer>
        </BaseSection>
    );
};
export default TodoApplication;
