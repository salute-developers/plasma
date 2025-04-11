import { styled } from '@linaria/react';

import { tokens, classes } from './Sheet.tokens';
import { CommonProps } from './Sheet.types';
import { handleTransition } from './utils/handleTransition';

export const StyledContentWrapper = styled.div<CommonProps>`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    z-index: 1000;
    opacity: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    transition: ${handleTransition('all 0.5s 0.1s')};

    &.${String(classes.closed)} {
        opacity: 0;
        visibility: hidden;
        transform: translateY(100%);
    }
`;

export const StyledSheetHandle = styled.div`
    width: 3rem;
    padding: 1.75rem 0;
    margin: var(${tokens.handleMarginTop}) 0;
    opacity: 0.65;
    align-self: center;

    &::before {
        content: '';
        display: block;
        border-radius: 0.625rem;
        background-color: var(${tokens.handleBackgroundColor});
        height: 0.25rem;
    }
`;

export const StyledSheetContent = styled.div<{ hasHeader?: boolean; hasFooter?: boolean }>`
    border-radius: 1.25rem 1.25rem 0 0;
    background-color: var(${tokens.contentBackgroundColor});
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: ${({ hasHeader }) => (hasHeader ? 'unset' : '1rem')};
    padding-bottom: ${({ hasFooter }) => (hasFooter ? 'unset' : '1rem')};

    max-height: 100%;
    overflow: auto;
    overscroll-behavior: contain;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledSheetHeader = styled.div<{ isHeaderFixed?: boolean }>`
    width: 100%;
    z-index: 1;
    padding-top: 1rem;
    position: ${({ isHeaderFixed }) => (isHeaderFixed ? 'sticky' : 'static')};
    top: ${({ isHeaderFixed }) => (isHeaderFixed ? '0' : 'unset')};
    background-color: ${({ isHeaderFixed }) =>
        isHeaderFixed ? `var(${tokens.contentBackgroundColor})` : 'transparent'};
`;

export const StyledSheetBody = styled.div``;

export const StyledSheetFooter = styled.div<{ isFooterFixed?: boolean }>`
    width: 100%;
    z-index: 1;
    padding-bottom: 1rem;
    position: ${({ isFooterFixed }) => (isFooterFixed ? 'sticky' : 'static')};
    bottom: ${({ isFooterFixed }) => (isFooterFixed ? '0' : 'unset')};
    background-color: ${({ isFooterFixed }) =>
        isFooterFixed ? `var(${tokens.contentBackgroundColor})` : 'transparent'};
`;
