import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";

const DomainInput = () => {
    const leftAndRightInputWidth = "5rem";

    return (
        <InputGroup my={10} size="lg">
            <InputLeftElement
                width={leftAndRightInputWidth}
                border="1px solid var(--chakra-colors-lightgray)"
            >
                www.
            </InputLeftElement>
            <Input
                borderRadius="0"
                placeholder="mysite"
                style={{ paddingLeft: "5.5rem", paddingRight: "5.5rem" }}
            />
            <InputRightElement width={leftAndRightInputWidth} height="100%">
                <select
                    name="tld"
                    id="tld"
                    placeholder=".com"
                    style={{
                        border: "1px solid var(--chakra-colors-lightgray)",
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <option value=".com">.com</option>
                    <option value=".org">.org</option>
                    <option value=".ca">.ca</option>
                </select>
            </InputRightElement>
        </InputGroup>
    );
};
export default DomainInput;
