import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --white: #fff;
    --gray-700: #6a6a6a;
    --gray-300: #929AA1;
    --gray-100: ##00000040;

    --blue-800: #424A68;
    --blue-100: #EFF9FB;

    --orange-500: #E26E4B;

    --red-800: #8F002B;
    --red-500: #E80045;
    --red-200: #FFD6E2;

    --green-200: #20850033;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: transparent;
}

body {
    background: var(--blue-100);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`