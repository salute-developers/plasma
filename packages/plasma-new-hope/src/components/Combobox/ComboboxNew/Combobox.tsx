import React, { forwardRef, useState, useReducer, useMemo, createContext, useLayoutEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../../engines';
import { isEmpty } from '../../../utils';
import { useOutsideClick } from '../../../hooks';
import { sizeToIconSize } from '../../Select/utils';

import { classes } from './Combobox.tokens';
import { FloatingPopover } from './FloatingPopover';
import { useKeyNavigation, getItemByFocused } from './hooks/useKeyboardNavigation';
import {
    initialItemsTransform,
    updateAncestors,
    updateDescendants,
    updateSingleAncestors,
    filterItems,
    getItemId,
} from './utils';
import { Inner, StyledTextField } from './ui';
import { pathReducer, focusedPathReducer } from './reducers';
import { getPathMap, getTreeMaps } from './hooks/getPathMaps';
import { Ul, base, StyledArrow, IconArrowWrapper, StyledEmptyState } from './Combobox.styles';
import type { ItemContext, ComboboxProps } from './Combobox.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { ItemOptionTransformed } from './ui/Inner/ui/Item/Item.types';

export const Context = createContext<ItemContext>({} as ItemContext);

/**
 * Поле ввода с выпадающим списком и возможностью фильтрации и выбора элементов.
 */
export const comboboxRoot = (Root: RootProps<HTMLInputElement, Omit<ComboboxProps, 'items'>>) =>
    forwardRef<HTMLInputElement, ComboboxProps>((props, ref) => {
        const {
            multiple,
            value: outerValue,
            onChange: outerOnChange,
            isTargetAmount,
            items,
            placement = 'bottom-start',
            label,
            placeholder,
            helperText,
            contentLeft,
            textBefore,
            textAfter,
            variant = 'normal',
            listOverflow,
            listHeight,
            listWidth,
            portal,
            renderItem,
            view,
            size,
            labelPlacement,
            readOnly = false,
            disabled = false,
            alwaysOpened = false,
            filter,
            closeAfterSelect: outerCloseAfterSelect,
            ...rest
        } = props;
        // Создаем структуры для быстрой работы с деревом
        const [valueToCheckedMap, valueToItemMap, labelToItemMap] = useMemo(() => getTreeMaps(items), [items]);

        const [textValue, setTextValue] = useState(valueToItemMap.get(outerValue as string)?.label || '');
        const [internalValue, setInternalValue] = useState<string | string[]>(multiple ? [] : '');

        const value = outerValue || internalValue;

        const inputRef = useRef<HTMLInputElement>(null);
        const floatingPopoverRef = useRef<HTMLDivElement>(null);
        const inputForkRef = useForkRef(inputRef, ref);
        const treeId = safeUseId();

        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        const filteredItems = filterItems(
            transformedItems,
            textValue,
            valueToItemMap.get(value as string)?.label as string,
            filter,
        );

        const [pathMap, focusedToValueMap] = useMemo(() => getPathMap(filteredItems), [filteredItems, textValue]);

        // Состояния дерева элементов
        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const isCurrentListOpen = alwaysOpened || Boolean(path[0]);
        const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value || '';
        const withArrowInverse = isCurrentListOpen ? classes.arrowInverse : undefined;
        const closeAfterSelect = outerCloseAfterSelect ?? !multiple;

        // Логика работы при клике за пределами выпадающего списка
        const targetRef = useOutsideClick<HTMLUListElement>(() => {
            if (!isCurrentListOpen) {
                return;
            }

            dispatchPath({ type: 'reset' });
            dispatchFocusedPath({ type: 'reset' });

            // Проверяем, отличается ли значение в инпуте от выбранного value после закрытия дропдауна.
            // Если изменилось, то возвращаем label выбранного айтема.
            // Если нет выбранного элемента, то стираем значение инпута.
            if (textValue !== value) {
                if (isEmpty(value)) {
                    setTextValue('');
                } else {
                    setTextValue(valueToItemMap.get(value as string)?.label || '');
                }
            }
        }, floatingPopoverRef);

        const onChange = (newValue: string | Array<string>) => {
            if (outerOnChange) {
                outerOnChange(newValue as any);
            }

            setInternalValue(newValue);
        };

        const handleClickArrow = () => {
            if (disabled || readOnly) {
                return;
            }

            if (isCurrentListOpen) {
                dispatchPath({ type: 'reset' });
            } else {
                dispatchPath({ type: 'opened_first_level' });
            }

            dispatchFocusedPath({ type: 'reset' });
        };

        // Обработчик изменения значения в инпуте
        const handleTextValueChange = (e: ChangeEvent<HTMLInputElement>) => {
            setTextValue(e.target.value);
            dispatchPath({ type: 'opened_first_level' });
            dispatchFocusedPath({ type: 'reset' });
        };

        // Обработчик чипов
        const handleChipsChange = (chipLabels: any[]) => {
            onChange(chipLabels.map((chipLabel) => labelToItemMap.get(chipLabel)!.value));
        };

        // Обработчик открытия/закрытия выпадающего списка
        const handleListToggle = (opened: boolean) => {
            if (disabled || readOnly) {
                return;
            }

            if (opened) {
                dispatchPath({ type: 'opened_first_level' });
            } else {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
            }
        };

        // Обработчик выбора чекбоксов (только при multiple)
        const handleCheckboxChange = (item: ItemOptionTransformed) => {
            if (!multiple) {
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

            const newValues: Array<string> = [];

            valueToItemMap.forEach((item, key) => {
                if (checkedCopy.get(key)) {
                    newValues.push(item.value);
                }
            });

            if (!alwaysOpened && closeAfterSelect) {
                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });
            }

            if (onChange) {
                onChange(newValues);
            }

            // После выбора/снятия чекбокса скроллим к инпуту
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'start',
                    });
                }
            }, 1);
        };

        // Обработчик клика по айтему выпадающего списка
        const handleItemClick = (item: ItemOptionTransformed, e?: React.MouseEvent<HTMLElement>) => {
            if (!isEmpty(item?.items)) {
                return;
            }

            if (multiple) {
                handleCheckboxChange(item);
                return;
            }

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

            setTextValue(isCurrentChecked ? '' : item.label);

            if (!alwaysOpened && closeAfterSelect) {
                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });
            }

            if (onChange) {
                onChange(isCurrentChecked ? '' : item.value);
            }
        };

        const getChips = (): string[] => {
            if (multiple) {
                if (value.length === 0) return [];

                if (isTargetAmount) {
                    return [`Выбрано ${value.length}`];
                }

                return (value as []).map((value) => valueToItemMap.get(value)!.label);
            }

            return [];
        };

        const handlePressDown = (item: ItemOptionTransformed, e?: React.MouseEvent<HTMLElement>) => {
            if (isEmpty(item.items)) {
                handleItemClick(item, e);
            } else if (multiple) {
                handleCheckboxChange(item);
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
            multiselect: multiple,
            setTextValue,
        });

        // В данном эффекте мы следим за изменениями value снаружи и вносим коррективы в дерево чекбоксов.
        // Пример: когда юзер очистил value извне, тогда нужно пройтись по элементам и выключить все чекбоксы.
        useLayoutEffect(() => {
            const checkedCopy = new Map(checked);

            checkedCopy.forEach((_, key) => {
                checkedCopy.set(key, false);
            });

            if (!isEmpty(value)) {
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
            <Root size={size} view={view} labelPlacement={labelPlacement} disabled={disabled} readOnly={readOnly}>
                <div>
                    <Context.Provider
                        value={{
                            focusedPath,
                            checked,
                            multiple,
                            size,
                            handleCheckboxChange,
                            handleItemClick,
                            variant,
                            renderItem,
                            valueToItemMap,
                            treeId,
                        }}
                    >
                        <FloatingPopover
                            ref={floatingPopoverRef}
                            opened={isCurrentListOpen}
                            onToggle={(opened: boolean) => opened && handleListToggle(true)}
                            placement={placement}
                            portal={portal}
                            target={(referenceRef) => (
                                <StyledTextField
                                    ref={inputForkRef}
                                    inputWrapperRef={referenceRef}
                                    value={textValue}
                                    onChange={handleTextValueChange}
                                    size={size}
                                    view={view}
                                    labelPlacement={labelPlacement}
                                    disabled={disabled}
                                    readOnly={readOnly}
                                    label={label}
                                    placeholder={placeholder}
                                    contentLeft={contentLeft}
                                    contentRight={
                                        <IconArrowWrapper disabled={disabled} onClick={handleClickArrow}>
                                            <StyledArrow
                                                color="inherit"
                                                size={sizeToIconSize(size)}
                                                className={withArrowInverse}
                                            />
                                        </IconArrowWrapper>
                                    }
                                    textBefore={textBefore}
                                    textAfter={textAfter}
                                    onKeyDown={onKeyDown}
                                    leftHelper={helperText}
                                    role="combobox"
                                    aria-autocomplete="list"
                                    aria-controls={`${treeId}_tree_level_1`}
                                    aria-expanded={isCurrentListOpen}
                                    aria-activedescendant={
                                        activeDescendantItemValue ? getItemId(treeId, activeDescendantItemValue) : ''
                                    }
                                    {...(multiple
                                        ? {
                                              enumerationType: 'chip',
                                              chips: getChips(),
                                              onChangeChips: handleChipsChange,
                                          }
                                        : { enumerationType: 'plain' })}
                                    {...rest}
                                    onEnterDisabled // Пропс для отключения обработчика Enter внутри Textfield
                                />
                            )}
                        >
                            <Root
                                size={size}
                                view={view}
                                labelPlacement={labelPlacement}
                                disabled={disabled}
                                readOnly={readOnly}
                            >
                                <Ul
                                    role="tree"
                                    id={`${treeId}_tree_level_1`}
                                    aria-multiselectable={Boolean(multiple)}
                                    listHeight={listHeight}
                                    listOverflow={listOverflow}
                                    listWidth={listWidth}
                                    ref={targetRef}
                                >
                                    {isEmpty(filteredItems) ? (
                                        <StyledEmptyState
                                            className={classes.emptyStateWrapper}
                                            size={size}
                                            description="Ничего не найдено"
                                        />
                                    ) : (
                                        filteredItems.map((item, index) => (
                                            <Inner
                                                key={`${index}/0`}
                                                item={item}
                                                currentLevel={0}
                                                path={path}
                                                dispatchPath={dispatchPath}
                                                index={index}
                                                listWidth={listWidth}
                                            />
                                        ))
                                    )}
                                </Ul>
                            </Root>
                        </FloatingPopover>
                    </Context.Provider>
                </div>
            </Root>
        );
    });

export const comboboxConfig = {
    name: 'Select',
    tag: 'div',
    layout: comboboxRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        readOnly: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
    },
};
