import { DeleteIcon } from "@chakra-ui/icons";
import { Center, Checkbox, Flex, IconButton, Text, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { memo } from "react";

import { useDeleteTodo } from "../api/deleteTodo";
import { useEditTodo } from "../api/editTodo";
import { ITodo } from "../types";
import Loader from "./Loader";

interface TodoProps extends ITodo {
    index: number;
}

const Todo = memo(({ title, completed, id, index }: TodoProps) => {
    const toast = useToast();
    const { mutateAsync: deleteTodoMutation, isLoading: isDeleteLoading } = useDeleteTodo();
    const { mutateAsync: editTodoMutation, isLoading: isEditLoading } = useEditTodo();

    const editTodo = async (id: number, checked: boolean) => {
        await editTodoMutation({
            id,
            completed: checked,
        });

        toast({
            title: `Todo #${index + 1} was edited successfully!`,
            status: "success",
        });
    };

    const deleteTodo = async (id: number) => {
        await deleteTodoMutation(id);
        toast({
            title: `Todo #${index + 1} was removed successfully!`,
            status: "success",
        });
    };

    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 200 }}
            layout
        >
            <Flex
                justifyContent="space-between"
                gap={2}
                mb={4}
                p={[2, 2, 4]}
                borderRadius="4px"
                backgroundColor="gray.100"
            >
                <Center gap={4}>
                    <IconButton aria-label={""} onClick={() => deleteTodo(id)}>
                        <DeleteIcon color="red" />
                    </IconButton>
                    <Text
                        fontSize={["lg", "xl", "2xl"]}
                        fontWeight="500"
                        textTransform="capitalize"
                        textDecoration={isDeleteLoading ? "line-through" : ""}
                    >
                        {index + 1}. {title}
                    </Text>

                    {isDeleteLoading && <Loader size="5" />}
                </Center>

                <Center>
                    {isEditLoading && <Loader size="5" />}

                    <Checkbox
                        fontWeight="bold"
                        borderColor="black"
                        colorScheme="green"
                        defaultChecked={completed}
                        onChange={(e) => editTodo(id, e.target.checked)}
                        size="lg"
                    >
                        Done
                    </Checkbox>
                </Center>
            </Flex>
        </motion.li>
    );
});

Todo.displayName = "Todo";

export default Todo;
