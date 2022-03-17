import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1920px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkBlue: #133152;
        --medBlue: rgba(22, 67, 116, 1);
        --orange: #fc5432;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
    }
`;