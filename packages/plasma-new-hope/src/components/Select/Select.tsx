import React, { forwardRef, useState, useReducer, useMemo, createContext, useLayoutEffect, useRef } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { isEmpty } from '../../utils';
import { useOutsideClick } from '../../hooks';

import { useKeyNavigation, getItemByFocused } from './hooks/useKeyboardNavigation';
import {
    initialItemsTransform,
    updateAncestors,
    updateDescendants,
    updateSingleAncestors,
    getView,
    getInitialValue,
} from './utils';
import { Inner, Target } from './ui';
import { pathReducer, focusedPathReducer } from './reducers';
import { usePathMaps } from './hooks/usePathMaps';
import { Ul, base } from './Select.styles';
import type { ItemContext, MergedSelectProps, RequiredProps } from './Select.types';
import type { MergedDropdownNodeTransformed } from './ui/Inner/ui/Item/Item.types';
import { FloatingPopover } from './FloatingPopover';

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
            labelPlacement,
            placeholder,
            helperText,
            disabled = false,
            view: outerView,
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
            isTargetAmount,
            ...rest
        } = props;
        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        // Создаем структуры для быстрой работы с деревом
        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap, labelToItemMap] = usePathMaps(
            transformedItems,
        );

        const [internalValue, setInternalValue] = useState<string | number | Array<string | number>>(
            props.multiselect ? [] : '',
        );

        const value =
            outerValue !== null && outerValue !== undefined
                ? getInitialValue(outerValue, valueToItemMap)
                : internalValue;

        const floatingPopoverRef = useRef<HTMLDivElement>(null);

        // Состояния дерева элементов
        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const isCurrentListOpen = Boolean(path[0]);
        const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value.toString() || '';
        const closeAfterSelect = outerCloseAfterSelect ?? !props.multiselect;
        const treeId = safeUseId();
        const view = target === 'textfield-like' && disabled ? 'default' : getView(status, outerView);

        // Собираем объект с пропсами для required и прокидываем их напрямую в компонент Textfield.
        const requiredProps =
            props.target === 'button-like'
                ? undefined
                : ({
                      required: props.required,
                      requiredPlacement: props.requiredPlacement,
                      optional: props.optional,
                  } as RequiredProps);

        const targetRef = useOutsideClick<HTMLUListElement>(() => {
            if (!isCurrentListOpen) {
                return;
            }

            dispatchPath({ type: 'reset' });
            dispatchFocusedPath({ type: 'reset' });
        }, floatingPopoverRef);

        const onChange = (newValue: string | number | Array<string | number>) => {
            if (outerOnChange) {
                outerOnChange(newValue as any);
            }

            setInternalValue(newValue);
        };

        const handleClickArrow = () => {
            if (disabled) {
                return;
            }

            if (isCurrentListOpen) {
                dispatchPath({ type: 'reset' });
            } else {
                dispatchPath({ type: 'opened_first_level' });
            }

            dispatchFocusedPath({ type: 'reset' });
        };

        const handleListToggle = (opened: boolean) => {
            if (disabled) {
                return;
            }

            if (opened) {
                dispatchPath({ type: 'opened_first_level' });
            } else {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
            }
        };

        const handleCheckboxChange = (item: MergedDropdownNodeTransformed) => {
            if (!props.multiselect) {
                return;
            }

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
        };

        const handleItemClick = (item: MergedDropdownNodeTransformed, e?: React.MouseEvent<HTMLElement>) => {
            if (!isEmpty(item?.items)) {
                return;
            }

            if (props.multiselect) {
                handleCheckboxChange(item);
                return;
            }

            if (e) {
                e.stopPropagation();
            }

            const isCurrentChecked = checked.get(item.value);

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
            focusedPath,
            dispatchFocusedPath,
            path,
            dispatchPath,
            pathMap,
            focusedToValueMap,
            handleListToggle,
            handlePressDown,
        });

        // В данном эффекте мы следим за изменениями value снаружи и вносим коррективы в дерево чекбоксов.
        // Пример: когда юзер очистил value извне, тогда нужно пройтись по элементам и выключить все чекбоксы.
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

            // В deps мы кладем именно outerValue и internalValue, а не просто value.
            // Т.к. вначале нужно отфильтровать и провалидировать outerValue и результат положить в переменную.
            // А переменную, содержащую сложные типы данных, нельзя помещать в deps.
        }, [outerValue, internalValue, items]);

        return (
            <Root
                view={view}
                size={size}
                labelPlacement={labelPlacement}
                chipView={chipView}
                disabled={disabled}
                {...(rest as any)}
            >
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
                        treeId,
                    }}
                >
                    <FloatingPopover
                        ref={floatingPopoverRef}
                        opened={isCurrentListOpen}
                        onToggle={(opened: boolean) => opened && handleListToggle(true)}
                        placement={placement}
                        portal={portal}
                        listWidth={listWidth}
                        target={(referenceRef) => (
                            <Target
                                ref={ref}
                                value={value}
                                opened={isCurrentListOpen}
                                valueToItemMap={valueToItemMap}
                                label={label}
                                placeholder={placeholder}
                                onKeyDown={onKeyDown}
                                labelPlacement={labelPlacement}
                                size={size}
                                contentLeft={contentLeft}
                                disabled={disabled}
                                renderValue={renderValue}
                                selectProps={props}
                                inputWrapperRef={referenceRef as React.MutableRefObject<HTMLDivElement>}
                                multiselect={props.multiselect}
                                view={view}
                                handleClickArrow={handleClickArrow}
                                helperText={helperText}
                                treeId={treeId}
                                activeDescendantItemValue={activeDescendantItemValue}
                                isTargetAmount={isTargetAmount}
                                onChange={onChange}
                                labelToItemMap={labelToItemMap}
                                chipView={chipView}
                                separator={separator}
                                requiredProps={requiredProps}
                            />
                        )}
                    >
                        <Root
                            view={view}
                            size={size}
                            labelPlacement={labelPlacement}
                            chipView={chipView}
                            disabled={disabled}
                            {...(rest as any)}
                        >
                            <Ul
                                role="tree"
                                id={`${treeId}_tree_level_1`}
                                aria-multiselectable={Boolean(props.multiselect)}
                                listHeight={listHeight}
                                listOverflow={listOverflow}
                                onScroll={handleScroll}
                                listWidth={listWidth}
                                ref={targetRef}
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
                    </FloatingPopover>
                </Context.Provider>
            </Root>
        );
    });

export const selectConfig = {
    name: 'Select',
    tag: 'div',
    layout: selectRoot,
    base,
    variations: {},
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'default',
    },
};
