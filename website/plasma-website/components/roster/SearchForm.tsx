import React, { memo, useRef, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';

import { multipleMediaQuery } from '../../mixins';

import { StyledActionIcon } from './StyledActionIcon';

interface SearchFormProps {
    onInput: (e: FormEvent<HTMLInputElement> | string) => void;
    searchQuery: string;
}

const minWidth = 64;

const StyledForm = styled.form`
    padding-top: 5rem;
    padding-bottom: 7.5rem;

    ${multipleMediaQuery(['M'])(css`
        padding-top: 3rem;
        padding-bottom: 4rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        padding-top: 1rem;
        padding-bottom: 2.5rem;
    `)}
`;

const StyledInputWrapper = styled.div`
    position: relative;
    max-width: calc(100vw - var(--page-padding-y) * 2);
`;

const TypoSettings = css`
    font-size: 5.5rem;
    font-family: var(--plasma-typo-h2-font-family);
    line-height: 7.125rem;
    color: rgba(255, 255, 255, 0.96);

    ${multipleMediaQuery(['M'])(css`
        font-size: 4rem;
        line-height: 4rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        font-size: 3rem;
        line-height: 3rem;
    `)}
`;

const StyledHiddenEl = styled.span`
    position: absolute;
    left: -999;
    visibility: hidden;
    opacity: 0;
    height: 0;

    white-space: pre;

    ${TypoSettings};
`;

const StyledSearchInput = styled.input<{ width: number | 'auto' }>`
    padding: 0;

    width: ${({ width }) => `${width !== 'auto' ? `${width}px` : width}`};
    max-width: calc(100% - var(--page-padding-y) - var(--page-padding-y) * 0.5);
    height: 7.125rem;

    background-color: transparent;
    border: none;
    outline: none;
    caret-color: rgba(64, 82, 246, 1);

    ${TypoSettings};

    &::placeholder {
        font-family: inherit;
        color: rgba(255, 255, 255, 0.12);
    }

    ${multipleMediaQuery(['L'])(css`
        --page-padding-y: 3.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        height: 5rem;

        &:not([value='']) {
            max-width: calc(100% - 5.375rem);
        }
    `)}
`;

const StyleIconClose = styled.span`
    --icon-size: 6.75rem;

    position: absolute;

    width: var(--icon-size);
    height: var(--icon-size);

    margin-left: 1rem;

    ${StyledActionIcon};

    & > div {
        width: inherit;
        height: inherit;
    }

    ${multipleMediaQuery(['L'])(css`
        margin-left: 0.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        --icon-size: 4rem;

        top: 0.625rem;
    `)}
`;

export const SearchForm = memo<SearchFormProps>(({ onInput, searchQuery }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const hiddenElRef = useRef<HTMLSpanElement>(null);

    const [width, setWidth] = useState<number | 'auto'>('auto');

    useEffect(() => {
        if (hiddenElRef.current && inputRef.current) {
            const { clientWidth } = hiddenElRef.current;

            if (searchQuery.length !== 0) {
                setWidth(clientWidth > minWidth ? clientWidth : minWidth);
            } else {
                setWidth('auto');
            }
        }
    }, [searchQuery, width]);

    useEffect(() => {
        inputRef?.current?.focus();
    }, []);

    return (
        <StyledForm>
            <StyledInputWrapper>
                <StyledHiddenEl ref={hiddenElRef}>{searchQuery}</StyledHiddenEl>
                <StyledSearchInput
                    width={width}
                    type="text"
                    ref={inputRef}
                    autoFocus
                    value={searchQuery}
                    placeholder="Знаю, что ищу"
                    onInput={onInput}
                />
                {searchQuery && (
                    <StyleIconClose onClick={() => onInput?.('')}>
                        <IconClose size="m" color="inherit" />
                    </StyleIconClose>
                )}
            </StyledInputWrapper>
        </StyledForm>
    );
});
