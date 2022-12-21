import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
    }

    body {
        background: ${(props) => props.theme['gray-200']};
        color: ${(props) => props.theme['gray-800']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
    }
`
