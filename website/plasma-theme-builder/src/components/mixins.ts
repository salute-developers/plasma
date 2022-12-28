import { css } from 'styled-components';

export const SBSansTextMono = css`
    font-family: 'SB Sans Text Mono';
`;

export const iconButtonFade = css`
    cursor: pointer;

    &&&:hover {
        opacity: 1;
    }

    transition: opacity 0.1s;
`;
