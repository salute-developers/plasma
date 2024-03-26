import React, { useEffect, useState, forwardRef } from 'react';

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
import { getSections, defaultValues, isNumber } from './utils';
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
            perPage,
            slots = defaultValues.slots,

            view,
            viewCurrentPage,
            type = defaultValues.type,
            size,
            pilled = defaultValues.pilled,
            square = defaultValues.square,
            disabled = defaultValues.disabled,

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

            onChangePageValue,
            onChangePerPageValue,
            ...rest
        } = props;

        const [page, setPageValue] = useState<number>(value ?? defaultValues.value);
        const [perPageValue, setPerPageValue] = useState(perPage);
        const [pages, setPagesValue] = useState<number>(value);
        const [sections, setSections] = useState<number[][] | null>(null);

        const typeClass = classes[`${type}Type` as keyof typeof classes];
        const roundedClass = pilled ? 'circle-circle' : 'square-square';

        const withHasPerPageSelect = hasPerPage ? classes.withHasPerPageSelect : undefined;
        const withHasQuickJump = hasQuickJump ? classes.withHasQuickJump : undefined;

        const disabledPages = disabled.map((el) => (isNumber(el) ? Number(el) : null));

        const handlerSetPages = (newPerPage: number | undefined) => {
            setPagesValue(Math.ceil(count / (newPerPage || (hasPerPage ? defaultValues.perPage : 1))));
        };

        const handlerSetPage = (newPageValue: number | null | undefined) => {
            newPageValue = newPageValue ?? defaultValues.value;
            if (newPageValue > pages) {
                newPageValue = pages;
            }
            if (newPageValue < 1) {
                newPageValue = 1;
            }
            if (disabledPages.includes(newPageValue)) {
                return;
            }
            setPageValue(newPageValue);
            onChangePageValue?.(newPageValue);
        };

        const handlerSetPerPage = (newPerPageValue: number) => {
            setPageValue(1);
            setPerPageValue(newPerPageValue);
            onChangePageValue?.(1);
            onChangePerPageValue?.(newPerPageValue);

            handlerSetPages(newPerPageValue);
        };

        const isActiveButton = (checkPage: number) => {
            return page === checkPage ? classes.paginationPageButtonActive : '';
        };

        useEffect(() => {
            handlerSetPages(perPage);
        }, [count, perPage, hasPerPage, setPagesValue]);

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
                                        <PaginationButton square={square} disabled>
                                            ...
                                        </PaginationButton>
                                    )}
                                    <PaginationSection key={indexSection}>
                                        {section.map((pageValue) => (
                                            <PaginationButton
                                                square={square}
                                                pin={roundedClass}
                                                key={pageValue}
                                                onClick={() => handlerSetPage(pageValue)}
                                                disabled={disabledPages.includes(pageValue)}
                                                className={cx(classes.paginationPageButton, isActiveButton(pageValue))}
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
                                value={perPageValue}
                                valuesList={perPageList}
                                onChangeValue={handlerSetPerPage}
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
