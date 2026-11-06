import styled from 'styled-components';

import { tokens } from '../../Pagination.tokens';
import { QuickJumpToPageInput } from '../PaginationQuickJumpToPage/PaginationQuickJumpToPage.styles';

export const WithoutRangeRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(${tokens.paginationWithoutRangeGap}, 1rem);
    width: 100%;
`;

export const WithoutRangePages = styled.div`
    display: flex;
    align-items: center;
    gap: var(${tokens.paginationWithoutRangePagesGap}, 0.25rem);
`;

export const WithoutRangeInput = styled(QuickJumpToPageInput)`
    width: var(${tokens.paginationWithoutRangeInputWidth}, var(${tokens.inputWidth}));
    text-align: center;
`;

export const WithoutRangeCurrent = styled.span`
    min-width: var(${tokens.paginationWithoutRangeInputWidth}, var(${tokens.inputWidth}));
    text-align: center;
`;

export const WithoutRangeTotal = styled.span`
    white-space: nowrap;
`;
