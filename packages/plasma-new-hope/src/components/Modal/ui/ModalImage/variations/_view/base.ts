import { css } from 'styled-components';

export const base = css`
    width: 100%;
    overflow: hidden;

    img,
    picture,
    video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
