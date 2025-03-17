import React, { forwardRef, useState, useReducer, useMemo, useLayoutEffect, useRef } from 'react';
import type { ChangeEvent, ForwardedRef } from 'react';
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
    getInitialValue,
    getRemovedElement,
} from './utils';
import { Inner, StyledTextField, VirtualList } from './ui';
import { pathReducer, focusedPathReducer } from './reducers';
import { getPathMap, getTreeMaps } from './hooks/getPathMaps';
import { Ul, base, StyledArrow, IconArrowWrapper, StyledEmptyState } from './Combobox.styles';
import type { ComboboxProps } from './Combobox.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { ItemOptionTransformed, ItemOption } from './ui/Inner/ui/Item/Item.types';
import { SelectNative } from './ui/SelectNative/SelectNative';
import { Context } from './Combobox.context';

/**
 * Поле ввода с выпадающим списком и возможностью фильтрации и выбора элементов.
 */

export const comboboxRoot = (Root: RootProps<HTMLInputElement, Omit<ComboboxProps, 'items'>>) =>
    forwardRef<HTMLInputElement, ComboboxProps>((props, ref) => {
        const {
            name,
            multiple,
            value: outerValue,
            onChange: outerOnChange,
            defaultValue,
            isTargetAmount,
            targetAmount,
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
            listMaxHeight,
            listWidth,
            portal,
            renderItem,
            view,
            size,
            labelPlacement,
            keepPlaceholder,
            readOnly = false,
            disabled = false,
            alwaysOpened = false,
            filter,
            closeAfterSelect: outerCloseAfterSelect,
            renderValue,
            zIndex,
            beforeList,
            afterList,
            virtual = false,
            hintView,
            hintSize,
            emptyStateDescription,
            onChangeValue,
            onScroll,
            ...rest
        } = props;

        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        // Создаем структуры для быстрой работы с деревом
        const [valueToCheckedMap, valueToItemMap, labelToItemMap] = useMemo(() => getTreeMaps(transformedItems), [
            items,
        ]);

        const [textValue, setTextValue] = useState(valueToItemMap.get(outerValue as string)?.label || '');
        const [internalValue, setInternalValue] = useState<string | string[]>(multiple ? [] : '');

        const value =
            outerValue !== null && outerValue !== undefined
                ? getInitialValue(outerValue, valueToItemMap)
                : internalValue;

        const inputRef = useRef<HTMLInputElement>(null);
        const floatingPopoverRef = useRef<HTMLDivElement>(null);
        const inputForkRef = useForkRef(inputRef, ref);
        const treeId = safeUseId();

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

        // Эта функция срабатывает при изменении Combobox и
        // при изменении нативного Select для формы (срабатывает только после изменения internalValue и рендера).
        const onChange = (
            newValue: string | Array<string> | ChangeEvent<HTMLSelectElement> | null,
            item?: ItemOption | null,
        ) => {
            // Условие для отправки изменений наружу
            if (props.onChange) {
                // Условие для отправки если комбобокс используется без формы.
                if (!props.name && (typeof newValue === 'string' || Array.isArray(newValue))) {
                    props.onChange(newValue as any, item || null);
                }

                // Условие для отправки если комбобокс используется с формой.
                if (props.name && typeof newValue === 'object' && !Array.isArray(newValue)) {
                    props.onChange(newValue as any);
                }
            }

            // Условие для изменения внутреннего значения (только если newValue строка или массив строк).
            if (typeof newValue === 'string' || Array.isArray(newValue)) {
                setInternalValue(newValue);
            }
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

            if (onChangeValue) {
                onChangeValue(e.target.value);
            }
        };

        // Обработчик чипов
        const handleChipsChange = (chipLabels: any[]) => {
            if (!Array.isArray(value)) return;

            // TODO: #1564
            // Из лейблов чипов получаем value у item и далее прокидываем его в onChange.
            if (renderValue && !isTargetAmount) {
                const resultValues = [...value];

                value.forEach((_, index) => {
                    const labelAfterRenderValue = renderValue(
                        labelToItemMap.get(valueToItemMap.get(value[index])!.label)!,
                    );

                    if (!chipLabels.includes(labelAfterRenderValue)) {
                        resultValues.splice(index, 1);
                    }
                });

                const removedItemValue = getRemovedElement(value, resultValues, isTargetAmount);

                onChange(resultValues, removedItemValue ? valueToItemMap.get(removedItemValue) : null);
            } else {
                const newValues = chipLabels.map((chipLabel) => labelToItemMap.get(chipLabel)!.value);
                const removedItemValue = getRemovedElement(value, newValues, isTargetAmount);

                onChange(newValues, removedItemValue ? valueToItemMap.get(removedItemValue) : null);
            }
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
                updateDescendants(item, checkedCopy, true, valueToItemMap);
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
                onChange(newValues, item);
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

            const isCurrentChecked = checked.get(item.value);

            if (!alwaysOpened && closeAfterSelect) {
                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });
            }

            if (onChange) {
                onChange(isCurrentChecked ? '' : item.value, item);
            }
        };

        const getChips = (): string[] => {
            if (multiple && Array.isArray(value)) {
                if (value.length === 0) return [];

                if (isTargetAmount) {
                    return [`Выбрано ${targetAmount || value.length}`];
                }

                const renderValueMapper =
                    renderValue && ((stringValue: string) => renderValue(valueToItemMap.get(stringValue)!));
                const valueToItemMapper = (stringValue: string) => valueToItemMap.get(stringValue)!.label;

                return value.map(renderValueMapper || valueToItemMapper);
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
            setTextValue,
            multiple,
            value,
            textValue,
            valueToItemMap,
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

            setTextValue(valueToItemMap.get(value as string)?.label || '');

            // В deps мы кладем именно outerValue и internalValue, а не просто value.
            // Т.к. вначале нужно отфильтровать и провалидировать outerValue и результат положить в переменную.
            // А переменную, содержащую сложные типы данных, нельзя помещать в deps.
        }, [outerValue, internalValue, items]);

        useLayoutEffect(() => {
            if (defaultValue) {
                setInternalValue(defaultValue);
            }
        }, [defaultValue]);

        return (
            <Root
                size={size}
                view={view}
                labelPlacement={labelPlacement}
                disabled={disabled}
                readOnly={readOnly}
                name={name}
                hintView={hintView}
                hintSize={hintSize}
            >
                {name && (
                    <SelectNative
                        items={valueToItemMap}
                        name={name}
                        value={internalValue}
                        multiple={multiple}
                        onChange={onChange}
                        onSetValue={setInternalValue}
                        ref={ref as ForwardedRef<HTMLInputElement>}
                    />
                )}
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
                                <StyledTextField
                                    ref={name ? inputRef : (inputForkRef as ForwardedRef<HTMLInputElement>)}
                                    inputWrapperRef={referenceRef}
                                    value={textValue}
                                    onChange={handleTextValueChange}
                                    size={size}
                                    view={view}
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
                                    labelPlacement={labelPlacement}
                                    keepPlaceholder={keepPlaceholder}
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
                            zIndex={zIndex}
                        >
                            <Root
                                size={size}
                                view={view}
                                labelPlacement={labelPlacement}
                                disabled={disabled}
                                readOnly={readOnly}
                                name={name}
                            >
                                <Ul
                                    role="tree"
                                    id={`${treeId}_tree_level_1`}
                                    aria-multiselectable={Boolean(multiple)}
                                    listMaxHeight={listMaxHeight || listHeight}
                                    listWidth={listWidth}
                                    ref={targetRef}
                                    virtual={virtual}
                                    listOverflow={listOverflow}
                                    onScroll={virtual ? undefined : onScroll}
                                >
                                    {beforeList}

                                    {virtual ? (
                                        <VirtualList
                                            items={filteredItems}
                                            listMaxHeight={listMaxHeight || listHeight}
                                            onScroll={onScroll}
                                        />
                                    ) : (
                                        <>
                                            {isEmpty(filteredItems) ? (
                                                <StyledEmptyState
                                                    className={classes.emptyStateWrapper}
                                                    size={size}
                                                    description={emptyStateDescription || 'Ничего не найдено'}
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
                                        </>
                                    )}

                                    {afterList}
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
