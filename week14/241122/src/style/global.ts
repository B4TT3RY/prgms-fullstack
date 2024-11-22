import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
    body {
        padding: 0;
        margin: 0;
        background-color: ${({ themeName }) =>
          themeName === "light" ? "white" : "black"};
    }

    h1 {
        margin: 0;
    }

    * {
        color: ${({ themeName }) => (themeName === "light" ? "black" : "white")};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
