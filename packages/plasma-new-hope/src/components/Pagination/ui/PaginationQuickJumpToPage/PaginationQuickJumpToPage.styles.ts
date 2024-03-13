import { styled } from '@linaria/react';

import { tokens } from '../../Pagination.tokens';

export const QuickJumpToPageRoot = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
`;

export const QuickJumpToPageTypography = styled.div``;

export const QuickJumpToPageInput = styled.input`
    background: var(${tokens.paginationButtonHoverBackgroundColor});
    color: var(${tokens.paginationButtonHoverColor});

    width: var(${tokens.paginationInputWidth});
    height: var(${tokens.paginationButtonHeight});

    border: none;
    box-sizing: border-box;
    outline: none;
    border-radius: var(${tokens.paginationButtonRadius});
    padding: 0 0.625rem;

    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
`;
