import React, { useEffect, useState, forwardRef } from 'react';

import { cx, isNumber } from '../../utils';
import { RootProps } from '../../engines';

import {
    PaginationPages,
    PaginationActions,
    PaginationButton,
    PaginationSection,
    PaginationButtonGroup,
    PaginationRoot,
    PaginationShorter,
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
    forwardRef<HTMLDivElement, PaginationProps>(
        (
            {
                value = defaultValues.value,
                perPage,
                slots = defaultValues.slots,

                view,
                viewCurrentPage,
                type = defaultValues.type,
                size,
                pilled = defaultValues.pilled,
                square = defaultValues.square,
                disabledPages = defaultValues.disabledPages,

                count = defaultValues.value,

                hasQuickJump = defaultValues.hasQuickJump,
                hasPerPage = defaultValues.hasPerPage,
                perPageList = defaultValues.perPageList,
                isCommonButtonStyles = defaultValues.isCommonButtonStyles,

                placeholderQuickJump = defaultValues.placeholderQuickJump,
                textQuickJump = defaultValues.textQuickJump,
                textPerPage = defaultValues.textPerPage,

                leftContent,
                rightContent,

                listWidth,

                onChangePageValue,
                onChangePerPageValue,
                ...rest
            },
            ref,
        ) => {
            const [page, setPageValue] = useState<number>(1);
            const [perPageValue, setPerPageValue] = useState(perPage);
            const [pages, setPagesValue] = useState<number>(value);
            const [sections, setSections] = useState<number[][] | null>(null);

            const typeClass = classes[`${type}Type` as keyof typeof classes];
            const roundedClass = pilled ? 'circle-circle' : 'square-square';

            const withHasPerPageSelect = hasPerPage ? classes.withHasPerPageSelect : undefined;
            const withHasQuickJump = hasQuickJump ? classes.withHasQuickJump : undefined;

            const disabled = disabledPages.map((el) => (isNumber(el) ? Number(el) : null));

            const handlerSetPages = (newPerPage?: number) => {
                if (newPerPage) {
                    setPagesValue(Math.ceil(count / newPerPage));
                } else {
                    setPagesValue(Math.ceil(count / (hasPerPage ? defaultValues.perPage : 1)));
                }
            };

            const handlerSetPage = (newPageValue?: number) => {
                let pageValue = newPageValue ?? defaultValues.value;
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
                onChangePageValue?.(pageValue);
            };

            const handlerSetPerPage = (newPerPageValue?: number) => {
                handlerSetPage(1);
                setPerPageValue(newPerPageValue);
                onChangePerPageValue?.(newPerPageValue);

                handlerSetPages(newPerPageValue);
            };

            const isActiveButton = (checkPage: number) => {
                return page === checkPage ? classes.paginationPageButtonActive : '';
            };

            useEffect(() => {
                handlerSetPages(perPage);
            }, [perPage, count, handlerSetPages]);

            useEffect(() => {
                handlerSetPage(value);
            }, [value]);

            useEffect(() => {
                setSections(getSections(page, pages, slots));
            }, [page, slots, pages, setSections, getSections]);

            return (
                <Root
                    size={size}
                    view={view}
                    viewCurrentPage={viewCurrentPage}
                    className={cx(classes.wrapper, typeClass)}
                    ref={ref}
                    {...rest}
                >
                    <PaginationRoot className={typeClass}>
                        <PaginationPages>
                            {leftContent && (
                                <PaginationButtonGroup isCommonButtonStyles={isCommonButtonStyles}>
                                    {leftContent}
                                </PaginationButtonGroup>
                            )}
                            {sections &&
                                sections.map((section, indexSection) => (
                                    <>
                                        {indexSection !== 0 && (
                                            <PaginationShorter stretching="fixed" disabled>
                                                ...
                                            </PaginationShorter>
                                        )}
                                        <PaginationSection key={indexSection}>
                                            {section.map((pageValue) => (
                                                <PaginationButton
                                                    square={square}
                                                    pin={roundedClass}
                                                    key={pageValue}
                                                    onClick={() => handlerSetPage(pageValue)}
                                                    disabled={disabled.includes(pageValue)}
                                                    className={cx(
                                                        classes.paginationPageButton,
                                                        isActiveButton(pageValue),
                                                    )}
                                                >
                                                    {pageValue}
                                                </PaginationButton>
                                            ))}
                                        </PaginationSection>
                                    </>
                                ))}
                            {rightContent && (
                                <PaginationButtonGroup isCommonButtonStyles={isCommonButtonStyles}>
                                    {rightContent}
                                </PaginationButtonGroup>
                            )}
                        </PaginationPages>
                        <PaginationActions
                            className={cx(classes.actions, typeClass, withHasPerPageSelect, withHasQuickJump)}
                        >
                            {hasQuickJump && (
                                <PaginationQuickJumpToPage
                                    placeholderQuickJump={placeholderQuickJump}
                                    textQuickJump={textQuickJump}
                                    onChangeValue={handlerSetPage}
                                />
                            )}
                            {hasPerPage && (
                                <PaginationSelectPerPage
                                    textPerPage={textPerPage}
                                    perPageValue={perPageValue}
                                    perPageList={perPageList}
                                    onChangeValue={handlerSetPerPage}
                                    size={size}
                                    listWidth={listWidth}
                                />
                            )}
                        </PaginationActions>
                    </PaginationRoot>
                </Root>
            );
        },
    );

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
