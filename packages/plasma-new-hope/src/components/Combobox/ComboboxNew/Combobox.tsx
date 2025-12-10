import React, { forwardRef, useState, useReducer, useMemo, useLayoutEffect, useRef } from 'react';
import type { ChangeEvent, ForwardedRef, MouseEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { safeUseId, isEmpty } from 'src/utils';
import { RootProps } from 'src/engines';
import { useOutsideClick, useDidMountLayoutEffect } from 'src/hooks';

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
    getTextValue,
    defaultFilter,
} from './utils';
import { Inner, StyledTextField, VirtualList, SelectAll, TreeList } from './ui';
import { pathReducer, focusedPathReducer, treePathReducer } from './reducers';
import { getPathMap, getTreeMaps } from './hooks/getPathMaps';
import {
    Ul,
    base,
    StyledArrow,
    IconArrowWrapper,
    StyledEmptyState,
    StyledLeftHelper,
    ListWrapper,
} from './Combobox.styles';
import type { ComboboxProps } from './Combobox.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { ItemOptionTransformed, ItemOption } from './ui/Inner/ui/Item/Item.types';
import { SelectNative } from './ui/SelectNative/SelectNative';
import { Context } from './Combobox.context';

/**
 * Поле ввода с выпадающим списком и возможностью фильтрации и выбора элементов.
 */
export const comboboxRoot = (Root: RootProps<HTMLInputElement, Omit<ComboboxProps, 'items' | 'chipClickArea'>>) =>
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
            treeView = false,
            arrowPlacement = 'left',
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
            filterValue,
            onScroll,
            onToggle,
            mode = 'default',
            chipClickArea = 'full',
            // @ts-ignore
            _offset,
            ...rest
        } = props;

        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        // Создаем структуры для быстрой работы с деревом
        const [valueToCheckedMap, valueToItemMap, valueToPathMap] = useMemo(() => getTreeMaps(transformedItems), [
            items,
        ]);

        // Состояние поля поиска в target
        const [textValue, setTextValueState] = useState(
            getTextValue(multiple, outerValue, valueToItemMap, renderValue),
        );

        // Внутреннее состояние выбранных элементов
        const [internalValue, setInternalValue] = useState<string | string[]>(multiple ? [] : '');

        const value = outerValue !== null && outerValue !== undefined ? outerValue : internalValue;

        const rootRef = useRef<HTMLInputElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);
        const floatingPopoverRef = useRef<HTMLDivElement>(null);
        const inputForkRef = useForkRef(inputRef, ref);
        const listWrapperRef = useRef<HTMLDivElement>(null);
        const treeId = safeUseId();

        const filterCb = filter || defaultFilter;

        const filteredItems = useMemo(
            () =>
                filterItems(
                    transformedItems,
                    textValue,
                    getTextValue(multiple, value, valueToItemMap, renderValue),
                    filter,
                ),
            [transformedItems, textValue, filter, value],
        );

        const [pathMap, focusedToValueMap] = useMemo(() => getPathMap(filteredItems), [filteredItems, textValue]);

        const initialPath = alwaysOpened ? ['root'] : [];

        // Состояния дерева элементов
        const [path, dispatchPath] = useReducer(pathReducer, initialPath);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [checked, setChecked] = useState(valueToCheckedMap);
        const [treePath, dispatchTreePath] = useReducer(treePathReducer, {});

        const isCurrentListOpen = Boolean(path[0]);
        const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value || '';
        const withArrowInverse = isCurrentListOpen ? classes.arrowInverse : undefined;
        const closeAfterSelect = outerCloseAfterSelect ?? !multiple;

        const setTextValue = (newTextValue: string) => {
            setTextValueState(newTextValue);

            if (onChangeValue) {
                onChangeValue(newTextValue);
            }
        };

        /* Логика работы при клике за пределами выпадающего списка */
        useOutsideClick(() => {
            if (!isCurrentListOpen || alwaysOpened) {
                return;
            }

            handleListToggle(false);
        }, [floatingPopoverRef, listWrapperRef]);

        // Эта функция срабатывает при изменении Combobox и
        // при изменении нативного Select для формы (срабатывает только после изменения internalValue и рендера).
        const onChange = (
            newValue: string | Array<string> | ChangeEvent<HTMLSelectElement> | null,
            item?: ItemOption | null,
        ) => {
            // Условие для отправки изменений наружу
            if (props.onChange) {
                // Условие для отправки, если комбобокс используется без формы.
                if (!props.name && (typeof newValue === 'string' || Array.isArray(newValue))) {
                    props.onChange(newValue as any, item || null);
                }

                // Условие для отправки, если комбобокс используется с формой.
                if (props.name && typeof newValue === 'object' && !Array.isArray(newValue)) {
                    props.onChange(newValue as any);
                }
            }

            // Условие для изменения внутреннего значения (только если newValue строка или массив строк).
            if (typeof newValue === 'string' || Array.isArray(newValue)) {
                setInternalValue(newValue);
            }
        };

        const handleClickArrow = (e: MouseEvent<HTMLElement>) => {
            handleListToggle(!isCurrentListOpen);

            // При клике на иконку закрытия фокус не должен становиться в инпут.
            e.stopPropagation();
        };

        // Обработчик изменения значения в инпуте
        const handleTextValueChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (!filterValue || filterValue(e.target.value)) {
                setTextValue(e.target.value);
            }
            dispatchPath({ type: 'opened_first_level' });
            dispatchFocusedPath({ type: 'reset' });
        };

        // Обработчик чипов
        const handleChipClick = (chip: { value: string; label: string; disabled: boolean }) => {
            if (!Array.isArray(value)) return;

            if (isTargetAmount) {
                // При закрытии чипа в режиме isTargetAmount в value оставляем только disabled-элементы
                onChange(
                    value.filter((val) => valueToItemMap?.get(val)?.disabled),
                    null,
                );
            } else {
                onChange(
                    value.filter((val) => val !== chip.value),
                    valueToItemMap.get(chip.value) || { value: chip.value, label: chip.label },
                );
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
                dispatchTreePath({ type: 'reset' });

                // Возвращаем актуальное значение поля ввода после закрытия выпадающего списка.
                setTextValue(getTextValue(multiple, value, valueToItemMap, renderValue));

                // Скроллим чипы к левому краю при закрытии компонента
                const el = rootRef?.current?.querySelector('.input-scrollable-wrapper');
                if (multiple && value.length > 0 && el) {
                    el.scrollLeft = 0;
                }
            }

            if (onToggle) {
                onToggle(opened);
            }
        };

        // Обработчик выбора чекбоксов (только при multiple)
        const handleCheckboxChange = (item: ItemOptionTransformed) => {
            if (!multiple) {
                return;
            }

            const checkedCopy = new Map(checked);

            switch (checkedCopy.get(item.value)) {
                // Если чекбокс в состоянии indeterminate
                case 'indeterminate': {
                    updateDescendants(item, checkedCopy, true, valueToItemMap);
                    break;
                }
                // Если чекбокс в состоянии checked
                case true: {
                    updateDescendants(item, checkedCopy, false, valueToItemMap);
                    checkedCopy.set(item.value, false);
                    break;
                }
                // Если чекбокс в состоянии unchecked
                case false: {
                    updateDescendants(item, checkedCopy, true, valueToItemMap);
                    checkedCopy.set(item.value, true);
                    break;
                }
                default: {
                    break;
                }
            }

            const newValues: Array<string> = [];

            valueToItemMap.forEach((item, key) => {
                if (checkedCopy.get(key)) {
                    newValues.push(item.value);
                }
            });

            // Оставляем values, которых нет в items.
            if (Array.isArray(value)) {
                value.forEach((val: string) => {
                    if (!valueToItemMap.has(val)) {
                        newValues.push(val);
                    }
                });
            }

            if (!alwaysOpened && closeAfterSelect) {
                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });
                dispatchTreePath({ type: 'reset' });
            }

            if (onChange) {
                onChange(newValues, item);
            }
        };

        // Обработчик клика по айтему выпадающего списка
        const handleItemClick = (item: ItemOptionTransformed, e?: MouseEvent<HTMLElement>) => {
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
                dispatchTreePath({ type: 'reset' });
            }

            // Закрываем список, если элемент уже выбран.
            if (mode === 'radio' && isCurrentChecked) {
                return;
            }

            if (onChange) {
                onChange(isCurrentChecked ? '' : item.value, item);
            }
        };

        // Обработчик клика на таргет
        const handleTargetClick = () => {
            if (!isCurrentListOpen) {
                handleListToggle(true);
            }
        };

        const getChips = (): { value: string; label: string; disabled: boolean }[] => {
            if (multiple && Array.isArray(value)) {
                if (value.length === 0) return [];

                if (isTargetAmount) {
                    return [
                        {
                            value: '_removeAll',
                            label: `Выбрано ${targetAmount || value.length}`,
                            disabled: value.every((val) => valueToItemMap?.get(val)?.disabled),
                        },
                    ];
                }

                return value.map((value) => {
                    const currentLabel = renderValue
                        ? renderValue(valueToItemMap.get(value) || { value, label: value })
                        : valueToItemMap.get(value)?.label || value.toString();

                    return {
                        value,
                        label: currentLabel,
                        disabled: valueToItemMap.get(value)?.disabled || false,
                    };
                });
            }

            return [];
        };

        const handlePressDown = (item: ItemOptionTransformed, e?: MouseEvent<HTMLElement>) => {
            if (isEmpty(item.items)) {
                handleItemClick(item, e);
            } else if (multiple) {
                handleCheckboxChange(item);
            }
        };

        const helperTextStopPropagation = (event: MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
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
            treePath,
            dispatchTreePath,
            treeView,
            valueToPathMap,
            items: filteredItems,
        });

        // В данном эффекте мы следим за изменениями value снаружи и вносим коррективы в дерево чекбоксов.
        // Пример: когда юзер очистил value извне, тогда нужно пройтись по элементам и выключить все чекбоксы.
        useLayoutEffect(() => {
            const checkedCopy = new Map(valueToCheckedMap);

            checkedCopy.forEach((_, key) => {
                checkedCopy.set(key, false);
            });

            if (!isEmpty(value)) {
                if (Array.isArray(value)) {
                    value.forEach((val) => {
                        // Только если value находится в items, т.к. value может и не существовать в items.
                        if (valueToItemMap.has(val)) {
                            checkedCopy.set(val, true);
                            updateDescendants(valueToItemMap.get(val)!, checkedCopy, true);
                            updateAncestors(valueToItemMap.get(val)!, checkedCopy);
                        }
                    });
                } else {
                    // Только если value находится в items, т.к. value может и не существовать в items.
                    // eslint-disable-next-line no-lonely-if
                    if (valueToItemMap.has(value)) {
                        checkedCopy.set(value, 'done');
                        updateSingleAncestors(valueToItemMap.get(value)!, checkedCopy, 'dot');
                    }
                }
            }

            setChecked(checkedCopy);

            // В deps мы кладем именно outerValue и internalValue, а не просто value.
            // Т.к. вначале нужно отфильтровать и провалидировать outerValue и результат положить в переменную.
            // А переменную, содержащую сложные типы данных, нельзя помещать в deps.
        }, [outerValue, internalValue, items]);

        // Эффект для исключительных случаев, когда нужно обновить значение textValue при изменении items,
        // но только если значение textValue совпадает с value в item.
        useLayoutEffect(() => {
            if (!multiple && value && valueToItemMap.get(value as string)?.value === textValue) {
                setTextValue(valueToItemMap.get(value as string)?.label || value.toString());
            }
        }, [items]);

        // При изменении value нужно возвращать значение в инпуте к исходному.
        useDidMountLayoutEffect(() => {
            setTextValue(getTextValue(multiple, value, valueToItemMap, renderValue));
        }, [outerValue, internalValue]);

        useLayoutEffect(() => {
            if (defaultValue) {
                setInternalValue(defaultValue);
            }
        }, [defaultValue]);

        // Эффект для раскрытия дерева при поиске.
        useLayoutEffect(() => {
            if (treeView) {
                // Если поле ввода стало пустым или если пользователь выбирает элемент,
                // то скрываем все узлы дерева и выходим из эффекта.
                if (textValue === '' || textValue === getTextValue(multiple, value, valueToItemMap, renderValue)) {
                    dispatchTreePath({ type: 'reset' });
                    return;
                }

                // Иначе раскрываем все узлы, когда пользователь начинает вводить текст в поле ввода.
                dispatchTreePath({ type: 'expand_by_key', value: { filteredItems, filterCb, textValue } });
            }
        }, [textValue]);

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
                ref={rootRef}
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
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-underscore-dangle
                            _checkboxAppearance: (rest as any)._checkboxAppearance,
                            treePath,
                            dispatchTreePath,
                            arrowPlacement,
                            valueToPathMap,
                        }}
                    >
                        <FloatingPopover
                            ref={floatingPopoverRef}
                            opened={isCurrentListOpen}
                            placement={placement}
                            portal={portal}
                            listWidth={listWidth}
                            offset={_offset}
                            target={(referenceRef) => (
                                <div onClick={handleTargetClick}>
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
                                            <IconArrowWrapper
                                                disabled={disabled}
                                                readOnly={readOnly}
                                                onClick={handleClickArrow}
                                                className={classes.comboboxTargetArrow}
                                            >
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
                                        leftHelper={
                                            helperText && (
                                                <StyledLeftHelper onClick={helperTextStopPropagation}>
                                                    {helperText}
                                                </StyledLeftHelper>
                                            )
                                        }
                                        role="combobox"
                                        aria-autocomplete="list"
                                        aria-controls={`${treeId}_tree_level_1`}
                                        aria-expanded={isCurrentListOpen}
                                        aria-activedescendant={
                                            activeDescendantItemValue
                                                ? getItemId(treeId, activeDescendantItemValue)
                                                : ''
                                        }
                                        labelPlacement={labelPlacement}
                                        keepPlaceholder={keepPlaceholder}
                                        {...(multiple
                                            ? {
                                                  enumerationType: 'chip',
                                                  _chipClickArea: chipClickArea,
                                                  _chips: getChips(),
                                                  _onChipCloseClick: handleChipClick,
                                              }
                                            : { enumerationType: 'plain' })}
                                        {...rest}
                                        _onEnterDisabled // Пропс для отключения обработчика Enter внутри Textfield
                                    />
                                </div>
                            )}
                            zIndex={zIndex}
                            isInner={false}
                        >
                            <Root
                                size={size}
                                view={view}
                                labelPlacement={labelPlacement}
                                disabled={disabled}
                                readOnly={readOnly}
                                name={name}
                            >
                                {treeView ? (
                                    <TreeList
                                        items={filteredItems}
                                        listMaxHeight={listMaxHeight || listHeight}
                                        onScroll={virtual ? undefined : onScroll}
                                        virtual={virtual}
                                        beforeList={beforeList}
                                        afterList={afterList}
                                    />
                                ) : (
                                    <ListWrapper ref={listWrapperRef} listWidth={listWidth}>
                                        <Ul
                                            role="tree"
                                            id={`${treeId}_tree_level_1`}
                                            aria-multiselectable={Boolean(multiple)}
                                            listMaxHeight={listMaxHeight || listHeight}
                                            virtual={virtual}
                                            onScroll={virtual ? undefined : onScroll}
                                        >
                                            {beforeList}

                                            {props.multiple && props.selectAllOptions && (
                                                // TODO: #2004
                                                <SelectAll
                                                    selectAllOptions={props.selectAllOptions}
                                                    variant={variant}
                                                />
                                            )}

                                            {isEmpty(filteredItems) ? (
                                                <StyledEmptyState
                                                    className={classes.emptyStateWrapper}
                                                    size={size}
                                                    description={emptyStateDescription || 'Ничего не найдено'}
                                                />
                                            ) : (
                                                <>
                                                    {virtual ? (
                                                        <VirtualList
                                                            items={filteredItems}
                                                            listMaxHeight={listMaxHeight || listHeight}
                                                            onScroll={onScroll}
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
                                                                portal={listWrapperRef}
                                                            />
                                                        ))
                                                    )}
                                                </>
                                            )}

                                            {afterList}
                                        </Ul>
                                    </ListWrapper>
                                )}
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
