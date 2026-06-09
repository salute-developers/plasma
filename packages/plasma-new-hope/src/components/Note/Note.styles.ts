import styled, { css } from 'styled-components';

import { component, mergeConfig } from '../../engines';
import { buttonConfig } from '../Button';

import { tokens } from './Note.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const base = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const ContentBefore = styled.div`
    display: flex;
    flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
`;

export const TextBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
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
    top: 0;
    left: 0;
`;

export const Text = styled.span`
    position: relative;
`;

export const TextHelper = styled.span`
    display: block;
    width: 100%;
    visibility: hidden;
    position: absolute;
    z-index: -9999;
    opacity: 0;
    top: 0;
    left: 0;
`;

export const ActionContentContainer = styled.div``;

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
