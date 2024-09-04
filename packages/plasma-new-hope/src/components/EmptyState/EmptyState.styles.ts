import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { buttonConfig, buttonTokens } from '../Button';
import { component, mergeConfig } from '../../engines';

import { tokens } from './EmptyState.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const base = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--surface-solid-card);
    box-shadow: 0 4px 14px -4px rgba(8, 8, 8, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04);
    border-radius: var(${tokens.borderRadius});
    padding: var(${tokens.padding});
    text-align: center;
`;

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(--text-primary);
    ${buttonTokens.buttonColorActive}: var(--text-primary-active);
    ${buttonTokens.buttonColorHover}: var(--text-primary-hover);
    ${buttonTokens.buttonBackgroundColor}: none;
    ${buttonTokens.buttonPadding}: 0;
    ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
    ${buttonTokens.buttonRadius}: 0;
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}: 600;
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
    margin: var(${tokens.buttonMargin});
`;

export const IconWrapper = styled.div`
    margin: var(${tokens.iconMargin});
    line-height: 0;
`;

export const Description = styled.div`
    margin: var(${tokens.descriptionMargin});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
`;
