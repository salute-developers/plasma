import React, { useEffect, useState } from 'react';
import type { FC, FormEvent, KeyboardEvent } from 'react';

import { classes } from '../../Pagination.tokens';
import { PaginationButtonGroup } from '../../Pagination.styles';
import { PaginationSelectPerPage } from '../PaginationSelectPerPage/PaginationSelectPerPage';

import type { PaginationWithoutRangeProps } from './PaginationWithoutRange.types';
import {
    WithoutRangeRoot,
    WithoutRangePages,
    WithoutRangeInput,
    WithoutRangeCurrent,
    WithoutRangeTotal,
} from './PaginationWithoutRange.styles';

/**
 * Пагинация без номеров страниц
 */
export const PaginationWithoutRange: FC<PaginationWithoutRangeProps> = ({
    pageValue,
    pages,
    perPageValue,
    perPageList,
    hasQuickJump,
    hasPerPage,
    placeholderQuickJump,
    isCommonButtonStyles,
    leftContent,
    rightContent,
    size,
    listWidth,
    onChangePage,
    onChangePerPage,
    onFocusQuickJump,
    onBlurQuickJump,
    ...rest
}) => {
    const [draft, setDraft] = useState(String(pageValue));

    useEffect(() => {
        setDraft(String(pageValue));
    }, [pageValue]);

    const commit = () => {
        const nextPage = Math.min(Math.max(Number(draft), 1), pages);

        if (!draft || nextPage === pageValue) {
            setDraft(String(pageValue));
            return;
        }

        onChangePage(nextPage);
    };

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        setDraft(event.currentTarget.value.replace(/\D/g, ''));
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            commit();
        }

        if (event.key === 'Escape') {
            setDraft(String(pageValue));
        }
    };

    return (
        <WithoutRangeRoot className={classes.withoutRange} {...rest}>
            <WithoutRangePages>
                {leftContent && (
                    <PaginationButtonGroup isCommonButtonStyles={isCommonButtonStyles}>
                        {leftContent}
                    </PaginationButtonGroup>
                )}

                {hasQuickJump ? (
                    <WithoutRangeInput
                        className={classes.withoutRangeInput}
                        value={draft}
                        inputMode="numeric"
                        placeholder={placeholderQuickJump}
                        aria-label="Current page"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onFocus={onFocusQuickJump}
                        onBlur={(event) => {
                            commit();
                            onBlurQuickJump?.(event);
                        }}
                    />
                ) : (
                    <WithoutRangeCurrent>{pageValue}</WithoutRangeCurrent>
                )}

                <WithoutRangeTotal>/ {pages}</WithoutRangeTotal>

                {rightContent && (
                    <PaginationButtonGroup isCommonButtonStyles={isCommonButtonStyles}>
                        {rightContent}
                    </PaginationButtonGroup>
                )}
            </WithoutRangePages>

            {hasPerPage && (
                <PaginationSelectPerPage
                    textPerPage=""
                    perPageValue={perPageValue}
                    perPageList={perPageList}
                    onChangeValue={onChangePerPage}
                    size={size}
                    listWidth={listWidth}
                />
            )}
        </WithoutRangeRoot>
    );
};
