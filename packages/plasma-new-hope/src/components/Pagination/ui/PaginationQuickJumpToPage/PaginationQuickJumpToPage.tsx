import React, { useCallback, useState } from 'react';

import type { PaginationQuickJumpToPageProps } from './PaginationQuickJumpToPage.types';
import {
    QuickJumpToPageRoot,
    QuickJumpToPageTypography,
    QuickJumpToPageInput,
} from './PaginationQuickJumpToPage.styles';

export const PaginationQuickJumpToPage: React.FC<PaginationQuickJumpToPageProps> = ({ onChangeValue, ...rest }) => {
    const [pageValue, setPageValue] = useState<null | number>(null);

    const handleKeyPress = useCallback(
        (event: React.KeyboardEvent<HTMLElement>) => {
            if (event.key === 'Enter') {
                onChangeValue?.(pageValue);
            }
        },
        [onChangeValue, pageValue],
    );

    const handleChangeInput = useCallback(
        (event: React.FormEvent<HTMLInputElement>) => {
            setPageValue(Number(event.currentTarget.value ?? 1));
        },
        [setPageValue],
    );

    return (
        <QuickJumpToPageRoot {...rest}>
            <QuickJumpToPageTypography>Go to</QuickJumpToPageTypography>
            <QuickJumpToPageInput
                type="number"
                placeholder="Page"
                onKeyUp={handleKeyPress}
                onChange={handleChangeInput}
            />
        </QuickJumpToPageRoot>
    );
};
