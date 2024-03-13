import React, { useCallback, useEffect, useState, forwardRef } from 'react';

import { cx } from '../../utils';
import { RootProps } from '../../engines';

import {
    PaginationPages,
    PaginationActions,
    PaginationButton,
    PaginationSection,
    PaginationButtonGroup,
    PaginationRoot,
} from './Pagination.styles';
import type { PaginationProps } from './Pagination.types';
import { getSections, defaultValues } from './utils';
import { base as viewCSS } from './variations/_view/base';
import { base as typeCSS } from './variations/_type/base';
import { base as sizeCSS } from './variations/_size/base';
import { classes } from './Pagination.tokens';
import { PaginationQuickJumpToPage } from './ui/PaginationQuickJumpToPage/PaginationQuickJumpToPage';
import { PaginationSelectPerPage } from './ui/PaginationSelectPerPage/PaginationSelectPerPage';

export const paginationRoot = (Root: RootProps<HTMLDivElement, PaginationProps>) =>
    forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
        const {
            value = defaultValues.value,
            perPage = defaultValues.perPage,
            slots = defaultValues.slots,

            view,
            viewCurrentPage,
            type = defaultValues.type,
            size,
            pilled = defaultValues.pilled,
            stretching = defaultValues.stretching,
            disabled = defaultValues.disabled,

            pages = defaultValues.value,

            hasQuickJump = defaultValues.hasQuickJump,
            hasPerPage = defaultValues.hasPerPage,
            perPageList = defaultValues.perPageList,
            isCommonButtonStyles = defaultValues.isCommonButtonStyles,

            leftContent,
            rightContent,

            onChangeValue,
            ...rest
        } = props;

        const [page, setPageValue] = useState(value);
        const [perPageValue, setPerPageValue] = useState(perPage);
        const [sections, setSections] = useState<number[][] | null>(null);

        const typeClass = classes[`${type}Type` as keyof typeof classes];

        const setPage = useCallback(
            (pageValue: number | null) => {
                pageValue = pageValue ?? defaultValues.value;
                if (pageValue > pages) {
                    pageValue = pages;
                }
                if (pageValue < 1) {
                    pageValue = 1;
                }
                if (disabled.includes(pageValue)) {
                    return;
                }
                setPageValue(pageValue);
                onChangeValue?.(pageValue, perPageValue);
            },
            [perPageValue, disabled, setPageValue, onChangeValue],
        );

        const setPerPage = useCallback(
            (newPerPageValue: number) => {
                setPageValue(1);
                setPerPageValue(newPerPageValue);
                onChangeValue?.(1, newPerPageValue);
            },
            [setPageValue, setPerPageValue, onChangeValue],
        );

        useEffect(() => {
            setPage(value);
        }, [value, setPageValue]);

        useEffect(() => {
            setSections(getSections(page, pages, slots));
        }, [page, slots, pages, perPageValue, setSections, getSections]);

        return (
            <Root
                size={size}
                view={view}
                viewCurrentPage={viewCurrentPage}
                className={cx(classes.wrapper, typeClass)}
                ref={ref}
                {...rest}
            >
                <PaginationRoot className={cx(typeClass)}>
                    <PaginationPages>
                        {leftContent && (
                            <PaginationButtonGroup isCommonButtonStyles={isCommonButtonStyles}>
                                {leftContent}
                            </PaginationButtonGroup>
                        )}

                        {sections &&
                            sections.map((section, indexSection) => {
                                return (
                                    <>
                                        {indexSection !== 0 && (
                                            <PaginationButton square={!stretching} disabled>
                                                ...
                                            </PaginationButton>
                                        )}
                                        <PaginationSection key={indexSection}>
                                            {section.map((pageValue, indexPage) => {
                                                return (
                                                    <PaginationButton
                                                        square={!stretching}
                                                        pin={pilled ? 'circle-circle' : 'square-square'}
                                                        key={indexPage}
                                                        onClick={() => setPage(pageValue)}
                                                        disabled={disabled.includes(pageValue)}
                                                        className={cx(
                                                            classes.paginationPageButton,
                                                            page === pageValue
                                                                ? classes.paginationPageButtonActive
                                                                : '',
                                                        )}
                                                    >
                                                        {pageValue}
                                                    </PaginationButton>
                                                );
                                            })}
                                        </PaginationSection>
                                    </>
                                );
                            })}

                        {rightContent && (
                            <PaginationButtonGroup isCommonButtonStyles={isCommonButtonStyles}>
                                {rightContent}
                            </PaginationButtonGroup>
                        )}
                    </PaginationPages>
                    <PaginationActions
                        className={cx(
                            classes.actions,
                            typeClass,
                            hasPerPage ? classes.isPerPageSelect : '',
                            hasQuickJump ? classes.isQuickJump : '',
                        )}
                    >
                        {hasQuickJump && <PaginationQuickJumpToPage onChangeValue={(event) => setPage(event)} />}
                        {hasPerPage && (
                            <PaginationSelectPerPage
                                value={perPageValue}
                                valuesList={perPageList}
                                onChangeValue={(event) => setPerPage(event)}
                            />
                        )}
                    </PaginationActions>
                </PaginationRoot>
            </Root>
        );
    });

export const paginationConfig = {
    name: 'Pagination',
    tag: 'div',
    layout: paginationRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        type: {
            css: typeCSS,
        },
    },
    defaults: {
        view: 'clear',
        size: 'm',
    },
};
