import React, { forwardRef, useState, useReducer, useMemo, createContext, useLayoutEffect } from 'react';

import { RootProps } from '../../engines';
import { isEmpty, getPlacements } from '../../utils';
import { useOutsideClick } from '../../hooks';

import { useKeyNavigation } from './hooks/useKeyboardNavigation';
import { initialItemsTransform, updateAncestors, updateDescendants, updateSingleAncestors, getView } from './utils';
import { Inner, Target } from './ui';
import { pathReducer, focusedPathReducer, focusedChipIndexReducer } from './reducers';
import { usePathMaps } from './hooks/usePathMaps';
import { StyledPopover, Ul, base, OuterLabel, HelperText } from './Select.styles';
import type { ItemContext, MergedSelectProps } from './Select.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { MergedDropdownNodeTransformed } from './ui/Inner/ui/Item/Item.types';

export const Context = createContext<ItemContext>({} as ItemContext);

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectRoot = (Root: RootProps<HTMLButtonElement, Omit<MergedSelectProps, 'items'>>) =>
    forwardRef<HTMLButtonElement, MergedSelectProps>((props, ref) => {
        const {
            value: outerValue,
            onChange: outerOnChange,
            target = 'textfield-like',
            items,
            placement = 'bottom',
            label,
            labelPlacement = 'outer',
            placeholder,
            helperText,
            disabled = false,
            view,
            size,
            listOverflow,
            listHeight,
            listWidth,
            contentLeft,
            onScrollBottom,
            chipView,
            variant = 'normal',
            portal,
            renderValue,
            renderItem,
            status,
            onItemSelect,
            separator,
            closeAfterSelect: outerCloseAfterSelect,
            ...rest
        } = props;

        const [internalValue, setInternalValue] = useState<string | number | Array<string | number>>(
            outerValue || props.multiselect ? [] : '',
        );

        const value = outerValue || internalValue;

        const onChange = (e: string | number | Array<string | number>) => {
            if (outerOnChange) {
                outerOnChange(e as any);
            }

            setInternalValue(e);
        };

        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap] = usePathMaps(transformedItems);

        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [focusedChipIndex, dispatchFocusedChipIndex] = useReducer(focusedChipIndexReducer, null);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const closeAfterSelect = outerCloseAfterSelect ?? !props.multiselect;

        const targetRef = useOutsideClick<HTMLDivElement>(() => {
            if (focusedChipIndex != null) {
                dispatchFocusedChipIndex({ type: 'reset' });
            }
        });

        const handleToggle = (opened: boolean) => {
            if (opened) {
                dispatchPath({ type: 'opened_first_level' });
            } else {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
                dispatchFocusedChipIndex({ type: 'reset' });
            }
        };

        const handleCheckboxChange = (item: MergedDropdownNodeTransformed) => {
            if (props.multiselect) {
                const checkedCopy = new Map(checked);

                if (!checkedCopy.get(item.value)) {
                    checkedCopy.set(item.value, true);
                    updateDescendants(item, checkedCopy, true);
                } else {
                    checkedCopy.set(item.value, false);
                    updateDescendants(item, checkedCopy, false);
                }

                updateAncestors(item, checkedCopy);

                const newValues: Array<string | number> = [];

                valueToItemMap.forEach((item, key) => {
                    if (checkedCopy.get(key)) {
                        newValues.push(item.value);
                    }
                });

                if (closeAfterSelect) {
                    dispatchPath({ type: 'reset' });
                    dispatchFocusedPath({ type: 'reset' });
                }

                if (onChange) {
                    onChange(newValues);
                }
            }
        };

        const handleItemClick = (item: MergedDropdownNodeTransformed, e?: React.MouseEvent<HTMLElement>) => {
            if (!isEmpty(item?.items)) {
                return;
            }

            if (props.multiselect) {
                handleCheckboxChange(item);
            } else {
                if (e) {
                    e.stopPropagation();
                }

                const checkedCopy = new Map(checked);

                const isCurrentChecked = checkedCopy.get(item.value);

                checkedCopy.forEach((_, key) => {
                    checkedCopy.set(key, false);
                });

                if (!isCurrentChecked) {
                    checkedCopy.set(item.value, 'done');
                    updateSingleAncestors(item, checkedCopy, 'dot');
                }

                if (closeAfterSelect) {
                    dispatchPath({ type: 'reset' });
                    dispatchFocusedPath({ type: 'reset' });
                }

                if (onChange) {
                    onChange(isCurrentChecked ? '' : item.value);
                }

                if (onItemSelect) {
                    onItemSelect(item, e!);
                }
            }
        };

        const handleChipClick = (currentValue: string) => {
            handleCheckboxChange(valueToItemMap.get(currentValue)!);
        };

        const handlePressDown = (item: MergedDropdownNodeTransformed, e?: React.MouseEvent<HTMLElement>) => {
            if (isEmpty(item.items)) {
                handleItemClick(item, e);
            } else if (props.multiselect) {
                handleCheckboxChange(item);
            }
        };

        const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
            if (!onScrollBottom) return;

            const { target } = e;

            if (
                (target as HTMLElement).scrollHeight - (target as HTMLElement).scrollTop ===
                (target as HTMLElement).clientHeight
            ) {
                onScrollBottom(e);
            }
        };

        const { onKeyDown } = useKeyNavigation({
            value,
            focusedPath,
            dispatchFocusedPath,
            path,
            dispatchPath,
            pathMap,
            focusedToValueMap,
            handleToggle,
            handlePressDown,
            focusedChipIndex,
            dispatchFocusedChipIndex,
            valueToItemMap,
            multiselect: props.multiselect,
            isTargetAmount: props.isTargetAmount,
        });

        const isCurrentListOpen = Boolean(path[0]);

        // В данном эффекте мы следим за изменениями value и вносим коррективы в дерево чекбоксов.
        useLayoutEffect(() => {
            const checkedCopy = new Map(checked);

            checkedCopy.forEach((_, key) => {
                checkedCopy.set(key, false);
            });

            if (!isEmpty(value) || typeof value === 'number') {
                if (Array.isArray(value)) {
                    value.forEach((val) => {
                        checkedCopy.set(val, true);
                        updateDescendants(valueToItemMap.get(val)!, checkedCopy, true);
                        updateAncestors(valueToItemMap.get(val)!, checkedCopy);
                    });
                } else {
                    checkedCopy.set(value, 'done');
                    updateSingleAncestors(valueToItemMap.get(value)!, checkedCopy, 'dot');
                }
            }

            setChecked(checkedCopy);
        }, [value]);

        return (
            <Root ref={ref} size={size} view={status ? getView(status) : view} chipView={chipView} {...(rest as any)}>
                {label && labelPlacement === 'outer' && target !== 'button-like' && <OuterLabel>{label}</OuterLabel>}
                <Context.Provider
                    value={{
                        focusedPath,
                        checked,
                        multiselect: props.multiselect,
                        size,
                        handleCheckboxChange,
                        handleItemClick,
                        variant,
                        renderItem,
                        valueToItemMap,
                    }}
                >
                    <StyledPopover
                        ref={targetRef}
                        opened={isCurrentListOpen}
                        placement={getPlacements(placement)}
                        usePortal={Boolean(portal)}
                        frame={portal}
                        onToggle={handleToggle}
                        trigger="click"
                        target={
                            <Target
                                opened={isCurrentListOpen}
                                value={value}
                                valueToItemMap={valueToItemMap}
                                focusedPath={focusedPath}
                                focusedToValueMap={focusedToValueMap}
                                onChipClick={handleChipClick}
                                label={label}
                                placeholder={placeholder}
                                onKeyDown={onKeyDown}
                                focusedChipIndex={focusedChipIndex}
                                labelPlacement={labelPlacement}
                                selectProps={props}
                                size={size}
                                contentLeft={contentLeft}
                                disabled={disabled}
                                renderValue={renderValue}
                            />
                        }
                        preventOverflow={false}
                        closeOnOverlayClick
                        listWidth={listWidth}
                    >
                        {items && (
                            <Root size={size} {...(rest as any)}>
                                <Ul
                                    role="tree"
                                    id="tree_level_1"
                                    listHeight={listHeight}
                                    listOverflow={listOverflow}
                                    onScroll={handleScroll}
                                    listWidth={listWidth}
                                >
                                    {transformedItems.map((item, index) => (
                                        <Inner
                                            key={`${index}/0`}
                                            item={item}
                                            currentLevel={0}
                                            path={path}
                                            dispatchPath={dispatchPath}
                                            index={index}
                                            listWidth={listWidth}
                                        />
                                    ))}
                                </Ul>
                            </Root>
                        )}
                    </StyledPopover>
                </Context.Provider>
                {helperText && target === 'textfield-like' && <HelperText>{helperText}</HelperText>}
            </Root>
        );
    });

export const selectConfig = {
    name: 'Select',
    tag: 'div',
    layout: selectRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        chipView: 'default',
        size: 'm',
    },
};
