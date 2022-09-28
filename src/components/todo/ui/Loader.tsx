import { CircularProgress, CircularProgressProps } from "@chakra-ui/react";

const Loader = (props: CircularProgressProps) => {
    return (
        <CircularProgress
            justifyContent="center"
            display="flex"
            color="blue.500"
            isIndeterminate
            {...props}
        />
    );
};
export default Loader;
