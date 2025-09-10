import { styled } from '@linaria/react';

import { tokens } from '../../Pagination.tokens';

export const QuickJumpToPageRoot = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;

    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
    letter-spacing: var(${tokens.paginationLetterSpacing});
    line-height: var(${tokens.paginationLineHeight});
`;

export const QuickJumpToPageTypography = styled.div`
    white-space: nowrap;
`;

export const QuickJumpToPageInput = styled.input`
    background: var(${tokens.inputBackgroundColor});
    color: var(${tokens.inputColor});

    width: var(${tokens.inputWidth});
    height: var(${tokens.inputHeight});

    box-sizing: border-box;
    outline: none;
    border-radius: var(${tokens.inputBorderRadius});
    padding: var(${tokens.inputPadding});

    border-color: var(${tokens.inputBorderColor});
    border-width: var(${tokens.inputBorderWidth});
    border-style: solid;

    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
    letter-spacing: var(${tokens.paginationLetterSpacing});
    line-height: var(${tokens.paginationLineHeight});

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
`;
