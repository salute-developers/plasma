import { styled } from '@linaria/react';

import { tokens } from '../../Attach.tokens';

export const HiddenRoot = styled.div`
    position: absolute;
    inset: 0;
    z-index: -999;
    display: flex;
    column-gap: var(${tokens.horizontalGap});
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
`;

export const HiddenWrapper = styled.div`
    width: 100%;
    flex-shrink: 1;
    column-gap: var(${tokens.horizontalGap});
`;
