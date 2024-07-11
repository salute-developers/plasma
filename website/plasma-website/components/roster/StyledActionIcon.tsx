import { css } from 'styled-components';

export const StyledActionIcon = css`
    color: rgba(255, 255, 255, 0.28);
    cursor: pointer;

    transition: var(--color-transition);

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;
