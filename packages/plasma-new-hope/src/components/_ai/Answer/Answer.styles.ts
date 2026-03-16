import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../engines';
import { spinnerConfig, spinnerTokens } from '../../Spinner';

import { tokens } from './Answer.tokens';

const mergedSpinnerConfig = mergeConfig(spinnerConfig);
export const SpinnerComponent = component(mergedSpinnerConfig);

export const base = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
`;

export const Title = styled.div`
    box-sizing: border-box;

    color: var(${tokens.titleColor});
    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    font-weight: var(${tokens.titleFontWeight});
    letter-spacing: var(${tokens.titleLetterSpacing});
    line-height: var(${tokens.titleLineHeight});
`;

export const ContentWrapper = styled.div`
    box-sizing: border-box;
    margin-top: var(${tokens.titleContentGap});

    color: var(${tokens.textContentColor});
    font-family: var(${tokens.textContentFontFamily});
    font-size: var(${tokens.textContentFontSize});
    font-style: var(${tokens.textContentFontStyle});
    font-weight: var(${tokens.textContentFontWeight});
    letter-spacing: var(${tokens.textContentLetterSpacing});
    line-height: var(${tokens.textContentLineHeight});
`;

export const FooterWrapper = styled.div`
    box-sizing: border-box;
    margin-top: var(${tokens.contentFooterGap});
`;

export const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-top: var(${tokens.titleContentGap});
`;

export const LoadingTitle = styled.div`
    box-sizing: border-box;

    color: var(${tokens.loadingTitleColor});
    font-family: var(${tokens.loadingTitleFontFamily});
    font-size: var(${tokens.loadingTitleFontSize});
    font-style: var(${tokens.loadingTitleFontStyle});
    font-weight: var(${tokens.loadingTitleFontWeight});
    letter-spacing: var(${tokens.loadingTitleLetterSpacing});
    line-height: var(${tokens.loadingTitleLineHeight});
`;

export const SpinnerUI = styled(SpinnerComponent)`
    ${spinnerTokens.size}: var(${tokens.spinnerSize});
    ${spinnerTokens.color}: var(${tokens.spinnerColor});
`;

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: var(${tokens.titleContentGap});

    background: var(${tokens.errorContainerBackgroundColor});
    border-radius: var(${tokens.errorContainerBorderRadius});
    padding: var(${tokens.errorContainerPadding});
    gap: var(${tokens.errorContainerGap});
`;

export const ErrorTitle = styled.div`
    box-sizing: border-box;

    color: var(${tokens.errorTitleColor});
    font-family: var(${tokens.errorTitleFontFamily});
    font-size: var(${tokens.errorTitleFontSize});
    font-style: var(${tokens.errorTitleFontStyle});
    font-weight: var(${tokens.errorTitleFontWeight});
    letter-spacing: var(${tokens.errorTitleLetterSpacing});
    line-height: var(${tokens.errorTitleLineHeight});
`;

export const ErrorTextContent = styled.div`
    box-sizing: border-box;

    color: var(${tokens.errorTextContentColor});
    font-family: var(${tokens.errorTextContentFontFamily});
    font-size: var(${tokens.errorTextContentFontSize});
    font-style: var(${tokens.errorTextContentFontStyle});
    font-weight: var(${tokens.errorTextContentFontWeight});
    letter-spacing: var(${tokens.errorTextContentLetterSpacing});
    line-height: var(${tokens.errorTextContentLineHeight});
`;
