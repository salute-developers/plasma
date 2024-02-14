import { styled } from '@linaria/react';

import { tokens } from './Panel.tokens';

export const StyledWrapper = styled.div`
    background: var(${tokens.contentBackgroundColor});
    height: 100%;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    position: relative;
`;
