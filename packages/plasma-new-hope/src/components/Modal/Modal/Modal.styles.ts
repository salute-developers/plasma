import { css } from '@linaria/core';

export const noScroll = css`
    :global() {
        body.disable-scroll {
            overflow-y: hidden;
        }
    }
`;
