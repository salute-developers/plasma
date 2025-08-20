import React, { useState, forwardRef, Fragment, useRef, useEffect } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

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
    PaginationActionsLeft,
    PaginationHelperText,
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
                helperText,
                helperTextEllipsis,

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

                listWidth = 'fit-content',

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

            const pagesRef = useRef<HTMLDivElement>(null);
            const [pagesWidth, setPagesWidth] = useState<number>(0);

            const [rootWidth, setRootWidth] = useState<number>(0);
            const rootRef = useRef<HTMLDivElement>(null);

            const forkRef = useForkRef(rootRef, ref);

            const pages = Math.ceil(count / (perPageValue || 1));
            const sections = getSections(pageValue, pages, slots);

            const typeClass = classes[`${type}Type` as keyof typeof classes];
            const roundedClass = pilled ? 'circle-circle' : 'square-square';

            const withHasPerPageSelect = hasPerPage && !helperText ? classes.withHasPerPageSelect : undefined;
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
                    return;
                }

                setPageInner(newPageValue);

                return newPageValue;
            };

            const handleSetPage = (pageValueCandidate?: number) => {
                const newValue = pageSetter(pageValueCandidate);

                onChange?.(newValue, perPageValue);
                onChangePageValue?.(newValue);
            };

            const handlerSetPerPage = (newPerPageValue: number) => {
                setPerPageInner(newPerPageValue);

                onChange?.(pageValue, newPerPageValue);
                onChangePerPageValue?.(newPerPageValue);
            };

            const handleClick = (currentPage: number) => {
                if (isActiveButton(currentPage)) {
                    return;
                }

                handleSetPage(currentPage);
            };

            const isActiveButton = (checkPage: number) => {
                return pageValue === checkPage ? classes.paginationPageButtonActive : '';
            };

            useEffect(() => {
                const observers: ResizeObserver[] = [];

                if (pagesRef.current) {
                    const pagesObserver = new ResizeObserver((entries) => {
                        const newWidth = entries[0].contentRect.width;
                        setPagesWidth(newWidth);
                    });
                    pagesObserver.observe(pagesRef.current);
                    observers.push(pagesObserver);
                }

                if (rootRef.current) {
                    const rootObserver = new ResizeObserver((entries) => {
                        const newWidth = entries[0].contentRect.width;
                        setRootWidth(newWidth);
                    });
                    rootObserver.observe(rootRef.current);
                    observers.push(rootObserver);
                }

                return () => {
                    observers.forEach((observer) => observer.disconnect());
                };
            }, [type]);

            return (
                <Root
                    size={size}
                    view={view}
                    viewCurrentPage={viewCurrentPage}
                    className={cx(classes.wrapper, typeClass)}
                    ref={forkRef}
                    {...rest}
                >
                    <PaginationRoot className={typeClass}>
                        <PaginationPages ref={pagesRef}>
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
                                                    onClick={() => handleClick(currentPage)}
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
                            style={type === 'compact' ? { minWidth: '0px' } : { width: `calc(100% - ${pagesWidth}px)` }}
                            className={cx(classes.actions, typeClass, withHasPerPageSelect, withHasQuickJump)}
                        >
                            <PaginationActionsLeft className={typeClass}>
                                {hasQuickJump && (
                                    <PaginationQuickJumpToPage
                                        placeholderQuickJump={placeholderQuickJump}
                                        textQuickJump={textQuickJump}
                                        onChangeValue={handleSetPage}
                                    />
                                )}
                                {helperText && (
                                    <PaginationHelperText
                                        className={cx(typeClass, helperTextEllipsis ? classes.ellipsisText : '')}
                                        style={{ maxWidth: rootWidth }}
                                    >
                                        {helperText}
                                    </PaginationHelperText>
                                )}
                            </PaginationActionsLeft>
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
