import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { addScrollbar } from 'src/mixins';

import { tokens } from './Container.tokens';

export const base = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    background: var(${tokens.backgroundColor});
`;

export const HeaderWrapper = styled.div`
    box-sizing: border-box;
    padding: var(${tokens.headerPadding});
`;

export const ContentWrapper = styled.div`
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: var(${tokens.contentPadding});
    padding-right: var(${tokens.contentRightPadding});
    margin-right: var(${tokens.contentScrollRightOffset});
    gap: var(${tokens.contentGap});
    overflow: auto;

    ${addScrollbar({
        scrollWidth: `var(${tokens.contentScrollWidth})`,
        trackColor: `var(${tokens.contentScrollTrackColor})`,
        thumbColor: `var(${tokens.contentScrollThumbColor})`,
        scrollHeightOffset: `var(${tokens.contentScrollHeightOffset})`,
    })}
`;

export const FooterWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    padding: var(${tokens.footerPadding});

    &:before {
        content: '';
        position: absolute;
        top: calc(-1 * var(${tokens.footerBlur}));
        right: var(${tokens.contentScrollWidth});
        left: 0;
        bottom: 0;
        z-index: 0;
        filter: blur(var(${tokens.footerBlur}));
        background: var(${tokens.backgroundColor});
    }
`;

export const InputWrapper = styled.div`
    z-index: 1;
`;

export const FooterCaption = styled.div<{ captionAlign?: string }>`
    z-index: 1;
    margin-top: var(${tokens.footerCaptionMarginTop});
    color: var(${tokens.footerCaptionColor});

    font-family: var(${tokens.footerCaptionFontFamily});
    font-size: var(${tokens.footerCaptionFontSize});
    font-style: var(${tokens.footerCaptionFontStyle});
    font-weight: var(${tokens.footerCaptionFontWeight});
    letter-spacing: var(${tokens.footerCaptionLetterSpacing});
    line-height: var(${tokens.footerCaptionLineHeight});

    text-align: ${({ captionAlign }) => (captionAlign === 'center' ? 'center' : 'left')};
`;
