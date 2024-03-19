import React, { useState } from 'react';

import { defaultValues, isNumber } from '../../utils';

import type { PaginationQuickJumpToPageProps } from './PaginationQuickJumpToPage.types';
import {
    QuickJumpToPageRoot,
    QuickJumpToPageTypography,
    QuickJumpToPageInput,
} from './PaginationQuickJumpToPage.styles';

export const PaginationQuickJumpToPage: React.FC<PaginationQuickJumpToPageProps> = ({
    placeholderQuickJump = defaultValues.placeholderQuickJump,
    textQuickJump = defaultValues.textQuickJump,
    onChangeValue,
    ...rest
}) => {
    const [pageValue, setPageValue] = useState<null | number>(null);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            onChangeValue?.(pageValue);
        }
    };

    const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
        if (!isNumber(event.currentTarget.value)) {
            return;
        }
        setPageValue(Number(event.currentTarget.value ?? 1));
    };

    return (
        <QuickJumpToPageRoot {...rest}>
            <QuickJumpToPageTypography>{textQuickJump}</QuickJumpToPageTypography>
            <QuickJumpToPageInput
                type="number"
                placeholder={placeholderQuickJump}
                onKeyUp={handleKeyPress}
                onChange={handleChangeInput}
            />
        </QuickJumpToPageRoot>
    );
};
