import React, { useState } from 'react';
import type { FC, FormEvent, KeyboardEvent } from 'react';

import { defaultValues } from '../../utils';

import type { PaginationQuickJumpToPageProps } from './PaginationQuickJumpToPage.types';
import {
    QuickJumpToPageRoot,
    QuickJumpToPageTypography,
    QuickJumpToPageInput,
} from './PaginationQuickJumpToPage.styles';

export const PaginationQuickJumpToPage: FC<PaginationQuickJumpToPageProps> = ({
    placeholderQuickJump = defaultValues.placeholderQuickJump,
    textQuickJump = defaultValues.textQuickJump,
    onChangeValue,
    onFocusQuickJump,
    onBlurQuickJump,
    ...rest
}) => {
    const [pageValue, setPageValue] = useState<number | string | undefined>('');

    const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
        const result = event.currentTarget.value.replace(/\D/g, '');
        if (result === '') {
            return setPageValue('');
        }

        setPageValue(Number(result));
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            if (onChangeValue) {
                onChangeValue(Number(pageValue));
            }

            setPageValue('');
        }
    };

    return (
        <QuickJumpToPageRoot {...rest}>
            <QuickJumpToPageTypography>{textQuickJump}</QuickJumpToPageTypography>
            <QuickJumpToPageInput
                value={pageValue}
                placeholder={placeholderQuickJump}
                onKeyUp={handleKeyPress}
                onChange={handleChangeInput}
                onFocus={onFocusQuickJump}
                onBlur={onBlurQuickJump}
            />
        </QuickJumpToPageRoot>
    );
};
