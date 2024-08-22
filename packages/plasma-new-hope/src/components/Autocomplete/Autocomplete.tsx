import React, { forwardRef, useState, useReducer } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { useDidMountEffect, useOutsideClick } from '../../hooks';
import { RootProps } from '../../engines';
import { getPlacements } from '../../utils';

import { focusedReducer } from './reducers/focusedReducer';
import { SuggestionItem, StyledTextField } from './ui';
import { StyledPopover, Ul, LeftHelper, base, InfiniteLoaderWrapper } from './Autocomplete.styles';
import type { AutocompleteProps, SuggestionItemType } from './Autocomplete.types';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';

/**
 * Компонент Autocomplete. Поле ввода с подсказками в выпадающем списке.
 */
export const autocompleteRoot = (Root: RootProps<HTMLInputElement, AutocompleteProps>) =>
    forwardRef<HTMLInputElement, AutocompleteProps>(
        (
            {
                value: outerValue,
                onChange,
                suggestions,
                view,
                size,
                labelPlacement,
                disabled,
                readOnly,
                label,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                onScroll,
                listMaxHeight,
                listWidth,
                portal,
                filter,
                onSuggestionSelect,
                threshold = 2,
                renderList,
                renderListEnd,
                onSearch,
                ...rest
            },
            ref,
        ) => {
            const [focused, dispatchFocused] = useReducer(focusedReducer, null);
            const [innerValue, setInnerValue] = useState<string | number>('');
            const [isOpen, setIsOpen] = useState(false);

            const listId = safeUseId();
            const value = outerValue ?? innerValue;

            const helperTextId = safeUseId();

            const targetRef = useOutsideClick<HTMLDivElement>(() => {
                setIsOpen(false);
            });

            const handleFocus = () => {
                if (value.toString().length >= threshold) {
                    setIsOpen(true);
                }
            };

            const handleItemClick = (e: SuggestionItemType) => {
                setInnerValue(e.label);

                if (onSuggestionSelect) {
                    onSuggestionSelect(e);
                }

                setIsOpen(false);
            };

            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const currentValue = e.target.value;

                setInnerValue(currentValue);

                if (onChange) {
                    onChange(e);
                }

                if (currentValue.toString().length >= threshold) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
            };

            const defaultFilterCallback = ({ label }: { label: string }) => {
                return label.toLowerCase().includes(value.toString().toLowerCase());
            };

            const finalResults = suggestions?.filter(filter || defaultFilterCallback) || [];

            const { onKeyDown } = useKeyNavigation({
                isOpen,
                setIsOpen,
                focused,
                dispatchFocused,
                finalResults,
                handleItemClick,
            });

            useDidMountEffect(() => {
                dispatchFocused({ type: 'reset' });
            }, [value]);

            return (
                <Root view={view} size={size} labelPlacement={labelPlacement} disabled={disabled} readOnly={readOnly}>
                    <StyledPopover
                        opened={isOpen}
                        offset={[0, 0]}
                        placement={getPlacements('bottom')}
                        isFocusTrapped={false}
                        usePortal={Boolean(portal)}
                        frame={portal}
                        target={
                            <StyledTextField
                                value={value}
                                onChange={handleChange}
                                onSearch={focused === null ? onSearch : undefined}
                                ref={ref}
                                size={size}
                                view={view}
                                labelPlacement={labelPlacement}
                                disabled={disabled}
                                readOnly={readOnly}
                                label={label}
                                contentLeft={contentLeft}
                                contentRight={contentRight}
                                textBefore={textBefore}
                                textAfter={textAfter}
                                onFocus={handleFocus}
                                onKeyDown={onKeyDown}
                                role="combobox"
                                aria-autocomplete="list"
                                aria-controls={listId}
                                aria-expanded={isOpen}
                                aria-activedescendant={`${listId}/${focused}`}
                                aria-describedby={helperTextId}
                                {...rest}
                            />
                        }
                        preventOverflow={false}
                        ref={targetRef}
                        listWidth={listWidth}
                    >
                        {(renderList && renderList(finalResults)) ||
                            (Boolean(finalResults.length) && (
                                <Root
                                    view={view}
                                    size={size}
                                    labelPlacement={labelPlacement}
                                    disabled={disabled}
                                    readOnly={readOnly}
                                >
                                    <Ul
                                        id={listId}
                                        role="listbox"
                                        aria-label={label}
                                        onScroll={onScroll}
                                        listMaxHeight={listMaxHeight}
                                    >
                                        {finalResults.map((suggestion, index) => (
                                            <SuggestionItem
                                                key={index}
                                                item={suggestion}
                                                onClick={handleItemClick}
                                                id={`${listId}/${index}`}
                                                focused={focused === index}
                                            />
                                        ))}

                                        {renderListEnd && (
                                            <InfiniteLoaderWrapper>{renderListEnd()}</InfiniteLoaderWrapper>
                                        )}
                                    </Ul>
                                </Root>
                            ))}
                    </StyledPopover>

                    {/* TODO: Дублируем хелпер для корректного позиционирования списка подсказок */}
                    {leftHelper && (
                        <LeftHelper id={helperTextId} disabled={disabled} readOnly={readOnly}>
                            {leftHelper}
                        </LeftHelper>
                    )}
                </Root>
            );
        },
    );

export const autocompleteConfig = {
    name: 'Autocomplete',
    tag: 'div',
    layout: autocompleteRoot,
    base,
    defaults: {
        view: 'default',
        size: 'l',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            css: '',
        },
    },
};
