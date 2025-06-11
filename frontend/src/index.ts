import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #F9FBFF;
    font-family: 'Roboto', sans-serif;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;