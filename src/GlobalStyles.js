import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #5ECE7B;
        --textColor: #1D1F22;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
    }

    body {
        width: 100%;
        min-height: 100vh;
    }

    img {
        max-width: 100%;
    }
`;
