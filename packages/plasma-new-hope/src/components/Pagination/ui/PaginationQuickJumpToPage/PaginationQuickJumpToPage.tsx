import React, { useState } from 'react';
import type { FC, FormEvent, KeyboardEvent } from 'react';

import { defaultValues } from '../../utils';
import { classes } from '../../Pagination.tokens';

import type { PaginationQuickJumpToPageProps } from './PaginationQuickJumpToPage.types';
import {
    QuickJumpToPageRoot,
    QuickJumpToPageTypography,
    QuickJumpToPageInput,
} from './PaginationQuickJumpToPage.styles';

export const PaginationQuickJumpToPage: FC<PaginationQuickJumpToPageProps> = ({
    prevPageValue = defaultValues.value,
    totalPages = defaultValues.value,
    hasTotalPages,
    placeholderQuickJump = defaultValues.placeholderQuickJump,
    textQuickJump = defaultValues.textQuickJump,
    onChangeValue,
    onFocusQuickJump,
    onBlurQuickJump,
    ...rest
}) => {
    // С общим числом страниц поле показывает текущую страницу, без него — пустое
    const currentValue = hasTotalPages ? String(prevPageValue) : '';

    // Введённое значение; null — пользователь ничего не вводит, поле показывает currentValue.
    // Так поле всегда синхронно с value из пропов, в том числе в контролируемом режиме
    const [draft, setDraft] = useState<string | null>(null);

    const commit = () => {
        if (draft === null) {
            return;
        }

        setDraft(null);

        if (!hasTotalPages) {
            if (draft) {
                onChangeValue?.(Number(draft));
            }

            return;
        }

        const nextPage = Math.min(Math.max(Number(draft), 1), totalPages);

        if (draft && nextPage !== prevPageValue) {
            onChangeValue?.(nextPage);
        }
    };

    const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
        setDraft(event.currentTarget.value.replace(/\D/g, ''));
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            commit();
        }

        if (event.key === 'Escape') {
            setDraft(null);
        }
    };

    return (
        <QuickJumpToPageRoot className={classes.quickJump} {...rest}>
            {textQuickJump && <QuickJumpToPageTypography>{textQuickJump}</QuickJumpToPageTypography>}
            <QuickJumpToPageInput
                value={draft ?? currentValue}
                placeholder={placeholderQuickJump}
                onKeyUp={handleKeyPress}
                onChange={handleChangeInput}
                onFocus={onFocusQuickJump}
                onBlur={(event) => {
                    if (hasTotalPages) {
                        commit();
                    }

                    onBlurQuickJump?.(event);
                }}
            />
            {hasTotalPages && (
                <>
                    <QuickJumpToPageTypography>/</QuickJumpToPageTypography>
                    <QuickJumpToPageTypography>{totalPages}</QuickJumpToPageTypography>
                </>
            )}
        </QuickJumpToPageRoot>
    );
};
