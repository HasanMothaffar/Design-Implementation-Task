import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    sizes: {
        container: {
            xl: "1170px",
        },
    },

    semanticTokens: {
        colors: {
            gray: "#777",
            lightgray: "#ddd",
            navbarbg: "#3d3325",
        },
    },

    textStyles: {
        h3: {
            fontSize: "1.5rem",
        },

        description: {
            fontSize: "1rem",
            color: "#a2a2a2",
        },
    },
});
