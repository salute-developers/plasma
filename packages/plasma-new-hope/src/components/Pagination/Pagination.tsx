import React, { useState, forwardRef, Fragment } from 'react';

import { cx, isNumber } from '../../utils';
import { RootPropsOmitOnChange } from '../../engines';

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

export const paginationRoot = (Root: RootPropsOmitOnChange<HTMLDivElement, PaginationProps>) =>
    forwardRef<HTMLDivElement, PaginationProps>(
        (
            {
                value: outerValue,
                defaultValue,

                perPage: outerPerPage,
                defaultPerPage,

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
                onChange,
                ...rest
            },
            ref,
        ) => {
            const [pageInner, setPageInner] = useState<number>(defaultValue || defaultValues.value);
            const pageValue = outerValue ?? pageInner;

            const [perPageInner, setPerPageInner] = useState<number | undefined>(
                hasPerPage ? defaultPerPage || defaultValues.perPage : undefined,
            );
            const perPageValue = outerPerPage ?? perPageInner;

            const pages = Math.ceil(count / (perPageValue || 1));
            const sections = getSections(pageValue, pages, slots);

            const typeClass = classes[`${type}Type` as keyof typeof classes];
            const roundedClass = pilled ? 'circle-circle' : 'square-square';

            const withHasPerPageSelect = hasPerPage ? classes.withHasPerPageSelect : undefined;
            const withHasQuickJump = hasQuickJump ? classes.withHasQuickJump : undefined;

            const disabled = disabledPages.map((el) => (isNumber(el) ? Number(el) : null));

            const pageSetter = (pageValueCandidate?: number) => {
                let newPageValue = pageValueCandidate ?? defaultValues.value;
                if (newPageValue > pages) {
                    newPageValue = pages;
                }

                if (newPageValue < 1) {
                    newPageValue = 1;
                }

                if (disabled.includes(newPageValue)) {
                    return { newPageValue: pageInner, isNewPage: false };
                }

                const isNewPage = newPageValue === pageInner;

                setPageInner(newPageValue);

                return { newPageValue, isNewPage };
            };

            const handleSetPage = (pageValueCandidate?: number) => {
                const { newPageValue, isNewPage } = pageSetter(pageValueCandidate);

                onChange?.(newPageValue, perPageValue, isNewPage);
                onChangePageValue?.(newPageValue, isNewPage);
            };

            const handlerSetPerPage = (newPerPageValue: number) => {
                setPerPageInner(newPerPageValue);

                onChange?.(pageValue, newPerPageValue, false);
                onChangePerPageValue?.(newPerPageValue);
            };

            const isActiveButton = (checkPage: number) => {
                return pageValue === checkPage ? classes.paginationPageButtonActive : '';
            };

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
                                    <Fragment key={indexSection}>
                                        {indexSection !== 0 && (
                                            <PaginationShorter
                                                stretching="fixed"
                                                disabled
                                                className={classes.buttonDisabled}
                                            >
                                                ...
                                            </PaginationShorter>
                                        )}
                                        <PaginationSection>
                                            {section.map((currentPage, index) => (
                                                <PaginationButton
                                                    key={`${currentPage}_${index}`}
                                                    className={cx(
                                                        classes.paginationPageButton,
                                                        isActiveButton(currentPage),
                                                        disabled.includes(currentPage) ? classes.buttonDisabled : '',
                                                    )}
                                                    pin={roundedClass}
                                                    disabled={disabled.includes(currentPage)}
                                                    square={square}
                                                    onClick={() => handleSetPage(currentPage)}
                                                >
                                                    {currentPage}
                                                </PaginationButton>
                                            ))}
                                        </PaginationSection>
                                    </Fragment>
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
                                    onChangeValue={handleSetPage}
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
