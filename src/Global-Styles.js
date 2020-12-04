import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    }

    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        color: #202020;
        background-color: #fafafa;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    h1, h2, h3, p {
        margin: 0;
        padding: 0;
    }

    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #fff;
    }
`;