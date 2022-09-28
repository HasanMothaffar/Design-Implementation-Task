import { ChakraProvider } from "@chakra-ui/react";

import { QueryClientProvider } from "@tanstack/react-query";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { queryClient } from "./data/react-query";
import "./index.css";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
