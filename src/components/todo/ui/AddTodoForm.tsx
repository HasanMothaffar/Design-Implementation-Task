import { AddIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useAddTodo } from "../api/addTodo";
import Loader from "./Loader";

const AddTodoForm = () => {
    const [title, setTitle] = useState("");

    const toast = useToast();
    const { mutateAsync, isLoading } = useAddTodo();

    const addTodo = async (event: FormEvent) => {
        event.preventDefault();
        await mutateAsync({
            completed: false,
            title,
        });
        toast({
            title: "Todo added successfully!",
            status: "success",
        });
    };

    return (
        <>
            <Flex as="form" gap={4} mb={10}>
                <Input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Buy grocery"
                    required
                    value={title}
                />
                <IconButton
                    width="8%"
                    aria-label={"Add"}
                    colorScheme="blue"
                    onClick={addTodo}
                    type="submit"
                >
                    {isLoading ? <Loader size="5" color="blue.400" /> : <AddIcon />}
                </IconButton>
            </Flex>
        </>
    );
};
export default AddTodoForm;
