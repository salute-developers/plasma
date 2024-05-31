import { styled } from '@linaria/react';

import { buttonConfig, buttonTokens } from '../../../Button';
import { tokens, constants } from '../../SelectNew.tokens';
import { component, mergeConfig } from '../../../../engines';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(--text-primary);
    ${buttonTokens.buttonColorActive}: var(--text-primary-active);
    ${buttonTokens.buttonColorHover}: var(--text-primary-hover);
    ${buttonTokens.buttonBackgroundColor}: none;
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonPadding}: 0;
    ${buttonTokens.buttonRadius}: var(${tokens.borderRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}: 600;
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
`;

export const Wrapper = styled.div`
    background: var(${constants.background});
    box-shadow: var(${constants.boxShadow});
    border-radius: var(${tokens.borderRadius});
    padding: var(${tokens.padding});
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: var(${tokens.notFoundContentPadding});
`;

export const Description = styled.div`
    margin-top: var(${tokens.notFoundContentGap});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
`;
