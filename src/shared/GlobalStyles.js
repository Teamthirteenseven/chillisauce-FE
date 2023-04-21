import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
  }

  button {
    cursor:pointer
  }

:root {
			/* color */
    --blue: #07133B;
    --lightblue: #0B2475;
    --darkblue: #314563;

    --mint1: #151515;
    --mint2: #B6DFDD;
    --mint3: #DEF1EF;
    --mint4: #F4FBF9;

    --black: #15161A;
    --darkgrey: #8B93A6;
    --grey: #C9CDD6;
    --lightgrey: #F1F2F4;

    --white : #ffffff;

    /* --line: #eaeaea;
		--white : #ffffff;
		--point : #ffcccc;
		--notice : #ff7776; */
  };
`

export default GlobalStyles;