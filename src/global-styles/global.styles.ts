import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --fs-h1: 2.75rem; // 44px
        --fs-h2: 1.875rem; // 30px
        --fs-h3: 1.25rem; // 20px
        --fs-h4: 1.125rem; // 18px
        --fs-body1: 1rem;
        --fs-body2: 0.875rem; // 14px
        --fs-caption: 0.75rem; // 12px
    
        @media (min-width: 40em) {
            --fs-h1: 3.38rem; // 54.08px
            --fs-h2: 2.25rem; // 36px
            --fs-h3: 1.5rem; // 24px
            --fs-h4: 1.25rem; // 20px
        }
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: 'Poppins', sans-serif;
    }
`;

// styles or style generating helper functions being used in more than one component go here
export const elevated = `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
