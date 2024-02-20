import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;    
    }

    body{
        background-color: #19181F;
    }
    
`

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`

