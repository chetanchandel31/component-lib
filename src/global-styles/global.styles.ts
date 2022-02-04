import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* TODO: add media queries later to handle smaller screen fonts */
    :root {
        --fs-xl: 2rem;
        --fs-body1: 1rem;
        --fs-body2: 0.875rem;
        --fs-caption: 0.75rem;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: 'Poppins', sans-serif;
        /* line-height: 1.1; */
    }
`;

// styles or style generating helper functions being used in more than one component go here
export const elevated = `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
