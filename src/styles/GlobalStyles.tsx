import { createGlobalStyle } from 'styled-components';
import { myTheme } from './Theme.styled';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        font-family: "Inter", "Arial", sans-serif;
        font-style: normal;
        font-size: 10px;
        background-color: ${myTheme.colors.main}
    }
`
