import type { CSSProperties } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../engines';
import { buttonConfig } from '../../Button';

import { tokens } from './ToastNew.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const base = css``;

export const Toast = styled.div<{ width: CSSProperties['width']; textColor: CSSProperties['color'] }>`
    display: flex;
    align-items: center;
    background: var(${tokens.background});
    color: ${({ textColor }) => textColor || `var(${tokens.color})`};
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    max-width: var(${tokens.maxWidth});
    width: ${({ width }) => width || 'auto'};

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
`;

export const CloseIconWrapper = styled(Button)`
    height: var(${tokens.closeIconButtonSize});
    margin: var(${tokens.closeIconMargin});
    color: var(${tokens.closeIconColor});

    :hover {
        color: var(${tokens.closeIconColorOnHover});
    }
`;

export const StyledContentLeft = styled.div`
    margin: var(${tokens.contentLeftMargin});
    color: var(${tokens.contentLeftColor});
    line-height: 0;
`;
