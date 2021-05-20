import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #E52E4D;
  --green: #33cc95;
  --blue: #5429cc;
  --blue-light: #6933ff;
  --text-body: #969cb3; 
  --text-title: #363F5F;
  --shape: #ffffff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75% // 15px de font escrita para desktops
  }

  @media(max-width: 720px) {
    font-size: 87.5% // 14px. 
  }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

`;