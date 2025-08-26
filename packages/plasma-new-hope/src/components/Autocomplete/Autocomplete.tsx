import React, { forwardRef, useState, useReducer, useRef } from 'react';
import { safeUseId } from 'src/utils';
import { useDidMountEffect, useOutsideClick } from 'src/hooks';
import { RootProps } from 'src/engines';

import { FloatingPopover } from './FloatingPopover';
import { focusedReducer } from './reducers/focusedReducer';
import { SuggestionItem, StyledTextField, VirtualList } from './ui';
import { Ul, InfiniteLoaderWrapper, base, StyledLeftHelper, ListWrapper } from './Autocomplete.styles';
import type { AutocompleteProps, SuggestionItemType } from './Autocomplete.types';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';

/**
 * Компонент Autocomplete. Поле ввода с подсказками в выпадающем списке.
 */
export const autocompleteRoot = (Root: RootProps<HTMLInputElement, Omit<AutocompleteProps, 'hintText'>>) =>
    forwardRef<HTMLInputElement, AutocompleteProps>(
        (
            {
                value: outerValue,
                defaultValue,
                onChange,
                suggestions,
                view,
                size,
                labelPlacement,
                keepPlaceholder,
                disabled,
                readOnly,
                label,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                onScroll,
                listMaxHeight = '25rem',
                listWidth,
                portal,
                zIndex,
                filter,
                onSuggestionSelect,
                threshold = 2,
                renderList,
                renderListEnd,
                renderItem,
                onSearch,
                hintText,
                hintView = 'default',
                hintSize = 'm',
                beforeList,
                afterList,
                virtual = false,
                // @ts-ignore
                _offset,
                ...rest
            },
            ref,
        ) => {
            const [focused, dispatchFocused] = useReducer(focusedReducer, null);
            const [innerValue, setInnerValue] = useState<string>(defaultValue || '');
            const [isOpen, setIsOpen] = useState(false);

            const listId = safeUseId();
            const value = outerValue ?? innerValue;

            const helperTextId = safeUseId();
            const floatingPopoverRef = useRef<HTMLDivElement>(null);

            const targetRef = useOutsideClick<HTMLUListElement>(() => {
                setIsOpen(false);
            }, floatingPopoverRef);

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

            const helperTextStopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
                event.stopPropagation();
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
                <Root
                    view={view}
                    size={size}
                    labelPlacement={labelPlacement}
                    disabled={disabled}
                    readOnly={readOnly}
                    hintView={hintView}
                    hintSize={hintSize}
                >
                    <FloatingPopover
                        ref={floatingPopoverRef}
                        opened={isOpen}
                        portal={portal}
                        zIndex={zIndex}
                        listWidth={listWidth}
                        offset={_offset}
                        target={(referenceRef) => (
                            <StyledTextField
                                ref={ref}
                                inputWrapperRef={referenceRef}
                                value={value}
                                onChange={handleChange}
                                onSearch={focused === null ? onSearch : undefined}
                                size={size}
                                view={view}
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
                                hintText={String(hintText || '')}
                                labelPlacement={labelPlacement}
                                keepPlaceholder={keepPlaceholder}
                                leftHelper={
                                    leftHelper && (
                                        <StyledLeftHelper onClick={helperTextStopPropagation}>
                                            {leftHelper}
                                        </StyledLeftHelper>
                                    )
                                }
                                {...rest}
                            />
                        )}
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
                                    <ListWrapper>
                                        <Ul
                                            ref={targetRef}
                                            id={listId}
                                            role="listbox"
                                            aria-label={label}
                                            onScroll={virtual ? undefined : onScroll}
                                            listMaxHeight={listMaxHeight}
                                            virtual={virtual}
                                        >
                                            {virtual ? (
                                                <VirtualList
                                                    items={finalResults}
                                                    onClick={handleItemClick}
                                                    listId={listId}
                                                    listMaxHeight={listMaxHeight}
                                                    onScroll={onScroll}
                                                    renderItem={renderItem}
                                                />
                                            ) : (
                                                <>
                                                    {beforeList}

                                                    {finalResults.map((suggestion, index) => (
                                                        <SuggestionItem
                                                            key={index}
                                                            item={suggestion}
                                                            onClick={handleItemClick}
                                                            id={`${listId}/${index}`}
                                                            focused={focused === index}
                                                            renderItem={renderItem}
                                                        />
                                                    ))}

                                                    {afterList}
                                                </>
                                            )}

                                            {renderListEnd && (
                                                <InfiniteLoaderWrapper>{renderListEnd()}</InfiniteLoaderWrapper>
                                            )}
                                        </Ul>
                                    </ListWrapper>
                                </Root>
                            ))}
                    </FloatingPopover>
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
