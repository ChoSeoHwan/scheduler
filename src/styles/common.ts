import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');
  
  * {
    margin: 0;
    user-select: none;
  }
  
  html  {
    font-size: 62.5%;
  }
  
  body  {
    height: 100vh;
    display: flex;
    flex-direction: column;
        
    color: #2a2a2a;
    font-size: 1.4rem;
    font-family: 'Nanum Gothic', sans-serif;
    
    & > #root   {
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-wrap: nowrap;
    }
  }
  
`;
