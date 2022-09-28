import { Checkbox, Flex } from "@chakra-ui/react";
import { useState } from "react";

export interface ITodoFilters {
    onlyComplete: boolean;
    // You can add other filters here
}

const TodoFilters = ({
    onFilterChange,
}: {
    onFilterChange: (newFilters: ITodoFilters) => void;
}) => {
    const [showOnlyComplete, setShowOnlyComplete] = useState(false);

    return (
        <Flex mb={6} pb={2} borderBottom="1px dotted gray">
            <Checkbox
                mb={2}
                checked={showOnlyComplete}
                onChange={(e) => {
                    setShowOnlyComplete(e.target.checked);
                    onFilterChange({
                        onlyComplete: e.target.checked,
                    });
                }}
            >
                Show only complete
            </Checkbox>
        </Flex>
    );
};
export default TodoFilters;
