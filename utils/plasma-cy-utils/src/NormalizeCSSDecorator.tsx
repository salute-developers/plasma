import { createGlobalStyle } from 'styled-components';

/* stylelint-disable selector-max-universal */
export const NormalizeCSSDecorator = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
/* stylelint-enable selector-max-universal */
