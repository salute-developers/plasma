import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyHyphensNormal } from '../../mixins';

import { tokens } from './Notification.tokens';

export const StyledNotification = css`
    position: relative;
    box-sizing: border-box;

    width: 100%;
    max-width: 18.75rem;
    padding: 1rem 1.25rem;

    background: var(${tokens.background});
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 4px 14px rgba(0, 0, 0, 0.08);
    border-radius: 0.5rem;
`;

export const StyledTitle = styled.div`
    margin-bottom: 0.5rem;
`;

export const StyledContent = styled.div`
    font-family: var(${tokens.contentFontFamily});
    font-size: var(${tokens.contentFontSize});
    font-style: var(${tokens.contentFontStyle});
    font-weight: var(${tokens.contentFontWeight});
    letter-spacing: var(${tokens.contentFontLetterSpacing});
    line-height: var(${tokens.contentFontLineHeight});
    ${String(applyHyphensNormal)};

    color: var(${tokens.contentColor});
`;

export const StyledItemWrapper = styled.div<{ isHiding: boolean }>`
    margin-top: 1rem;
    opacity: 1;

    &&.show {
        animation: 0.4s showAnimation ease-out;
    }

    &&.hide {
        animation: 0.4s hideAnimation ease-out;
    }

    @keyframes showAnimation {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes hideAnimation {
        0% {
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding: 0 1.5rem 1.5rem;
    max-height: 100%;
`;
