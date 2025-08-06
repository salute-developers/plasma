import { css } from '@linaria/core';

import { tokens } from '../../NavigationDrawer.tokens';

export const sectionStyles = css`
    display: flex;
    flex-direction: column;
`;

export const sectionHeaderStyles = css`
    display: flex;
    flex-direction: row;
    padding: var(${tokens.sectionPadding});
    gap: var(${tokens.sectionHeaderGap});
    align-items: center;

    color: var(${tokens.sectionColor});
    font-size: var(${tokens.sectionFontSize});

    svg {
        color: var(${tokens.sectionColor});
    }
`;

export const sectionDividerStyles = css`
    height: var(${tokens.dividerHeight});
    background: var(${tokens.dividerColor});
`;
