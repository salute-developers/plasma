import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { buttonConfig } from '../Button';

import { tokens } from './Note.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const base = css`
    position: relative;
    display: flex;
    box-sizing: border-box;
`;

export const ContentBefore = styled.div`
    display: flex;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Title = styled.div<{ hasClose?: boolean }>`
    padding-right: ${({ hasClose }) => (hasClose ? `var(${tokens.titlePaddingRight})` : 0)};
    box-sizing: border-box;
`;

export const TitleHelper = styled.div`
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
`;

export const Text = styled.span`
    display: block;
    position: relative;
`;
export const TextHelper = styled.span`
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
    top: 0;
    left: 0;
`;

export const CloseIconWrapper = styled(Button)`
    position: absolute;
    right: var(${tokens.closeIconRight});
    top: var(${tokens.closeIconTop});
    width: var(${tokens.closeIconButtonSize});
    height: var(${tokens.closeIconButtonSize});

    color: var(${tokens.closeIconColor});

    :hover {
        color: var(${tokens.closeIconColorOnHover});
    }
`;
