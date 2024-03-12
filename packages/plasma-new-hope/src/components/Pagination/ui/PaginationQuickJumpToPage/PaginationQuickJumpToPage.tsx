import React, { useCallback, useState } from 'react';

import type { PaginationQuickJumpToPageProps } from './PaginationQuickJumpToPage.types';
import {
    PaginationQuickJumpToPageRoot,
    PaginationQuickJumpToPageTypography,
    PaginationQuickJumpToPageInput,
} from './PaginationQuickJumpToPage.styles';

export const PaginationQuickJumpToPage: React.FC<PaginationQuickJumpToPageProps> = ({ onChangeValue, ...rest }) => {
    const [pageValue, setPageValue] = useState(null as any);

    const handleKeyPress = useCallback(
        (event: any) => {
            if (event.key === 'Enter') {
                setPageValue(null);
                onChangeValue && onChangeValue(Number(event.target.value));
            }
        },
        [onChangeValue],
    );

    return (
        <PaginationQuickJumpToPageRoot {...rest}>
            <PaginationQuickJumpToPageTypography>Go to</PaginationQuickJumpToPageTypography>
            <PaginationQuickJumpToPageInput
                type="number"
                placeholder="Page"
                onKeyUp={handleKeyPress}
                value={pageValue}
            />
        </PaginationQuickJumpToPageRoot>
    );
};
