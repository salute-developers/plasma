import React, { useState } from 'react';

import { defaultValues } from '../../utils';

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
    const [pageValue, setPageValue] = useState<number | string | undefined>();

    const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            onChangeValue?.(Number(pageValue));
            setPageValue('');
        }
    };

    const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
        const result = event.currentTarget.value.replace(/\D/g, '');
        if (result === '') return setPageValue('');
        setPageValue(Number(result));
    };

    return (
        <QuickJumpToPageRoot {...rest}>
            <QuickJumpToPageTypography>{textQuickJump}</QuickJumpToPageTypography>
            <QuickJumpToPageInput
                value={pageValue}
                placeholder={placeholderQuickJump}
                onKeyUp={handleKeyPress}
                onChange={handleChangeInput}
            />
        </QuickJumpToPageRoot>
    );
};
