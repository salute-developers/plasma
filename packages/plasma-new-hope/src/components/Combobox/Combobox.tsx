import React, { forwardRef, useMemo, useLayoutEffect, useRef } from 'react';
import type { ChangeEvent, ForwardedRef, MouseEvent } from 'react';
import { safeUseId, isEmpty } from 'src/utils';
import { RootProps } from 'src/engines';
import { useOutsideClick, useDidMountLayoutEffect, useForkRef } from 'src/hooks';

import { sizeToIconSize, initialItemsTransform, getItemId, getTextValue, defaultFilter, hasOuterValue } from './utils';
import { classes } from './Combobox.tokens';
import { FloatingPopover } from './FloatingPopover';
import {
    useKeyNavigation,
    getItemByFocused,
    useCheckedState,
    useListState,
    useSelectionMaps,
    useValue,
    useComboboxItems,
} from './hooks';
import { Inner, StyledTextField, VirtualList, SelectAll, TreeList } from './ui';
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
import { base as readOnlyCSS } from './variations/_readOnly/base';
import { SelectNative } from './ui/SelectNative/SelectNative';
import { Context } from './Combobox.context';

/**
 * Поле ввода с выпадающим списком и возможностью фильтрации и выбора элементов.
 */
export const comboboxRoot = (Root: RootProps<HTMLInputElement, Omit<ComboboxProps, 'items' | 'chipClickArea'>>) =>
    forwardRef<HTMLInputElement, ComboboxProps>((props, ref) => {
        const {
            /* Config */
            view,
            size,
            hintView,
            hintSize,

            /* Target */
            chipClickArea = 'full',
            contentLeft,
            contentRight,
            placeholder,
            helperText,
            label,
            labelPlacement,
            keepPlaceholder,

            /* IsMultiple */
            multiple,
            value: outerValue,
            defaultValue,
            onChange: outerOnChange,
            isTargetAmount,
            targetAmount,
            renderValue,
            name,

            /* Basic */
            items,
            treeView = false,
            arrowPlacement = 'left',
            placement = 'bottom-start',
            variant = 'normal',
            zIndex,
            listMaxHeight,
            listWidth,
            portal,
            textBefore,
            textAfter,
            renderItem,
            renderSelectionIcon,
            filter,
            closeAfterSelect: outerCloseAfterSelect,
            onChangeValue,
            filterValue,
            onScroll,
            onToggle,
            beforeList,
            afterList,
            virtual = false,
            mode = 'default',
            emptyStateDescription,
            flip,
            shift,
            singleLine,
            readOnly = false,
            disabled = false,
            alwaysOpened = false,

            /* Private */
            _offset,

            /* Rest */
            ...rest
        } = props;

        // Deep copy массива items с добавлением parent-ноды родителя.
        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        // Создаем структуры для быстрой работы с полным деревом.
        const [valueToCheckedMap, valueToItemMap, valueToPathMap] = useSelectionMaps(transformedItems);

        /**
         * Refs
         */
        const floatingPopoverRef = useRef<HTMLDivElement>(null);
        const treeId = safeUseId();
        const listWrapperRef = useRef<HTMLDivElement>(null);
        const rootRef = useRef<HTMLInputElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);
        const inputForkRef = useForkRef(inputRef, ref);

        /**
         * Hooks
         */
        const nativeMode = Boolean(name && !hasOuterValue(outerValue));

        const { value, handleChange, textValue, setTextValue } = useValue({
            outerValue,
            outerOnChange,
            defaultValue,
            multiple,
            nativeMode,
            valueToItemMap,
            renderValue,
            onChangeValue,
        });

        const currentLabel = getTextValue(multiple, value, valueToItemMap, renderValue);

        const {
            filteredItems,
            filteredMaps: {
                pathMap: filteredPathMap,
                focusedToValueMap: filteredFocusedToValueMap,
                valueToPathMap: filteredValueToPathMap,
            },
        } = useComboboxItems({
            items: transformedItems,
            textValue,
            currentLabel,
            filter,
        });

        const {
            path,
            treePath,
            focusedPath,
            dispatchPath,
            dispatchTreePath,
            dispatchFocusedPath,
            handleListToggle,
            resetListState,
            isListOpened,
        } = useListState({
            disabled,
            readOnly,
            onToggle,
            multiple,
            alwaysOpened,
            renderValue,
            rootRef,
            value,
            valueToItemMap,
            setTextValue,
        });

        const { checked, handleCheckboxChange, handleItemClick, handlePressDown } = useCheckedState({
            multiple,
            mode,
            value,
            valueToCheckedMap,
            valueToItemMap,
            closeAfterSelect: outerCloseAfterSelect ?? !multiple,
            resetListState,
            handleChange,
        });

        const { onKeyDown } = useKeyNavigation({
            focusedPath,
            dispatchFocusedPath,
            path,
            dispatchPath,
            pathMap: filteredPathMap,
            focusedToValueMap: filteredFocusedToValueMap,
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
            valueToPathMap: filteredValueToPathMap,
            items: filteredItems,
        });

        /**
         * Handlers
         */
        /* Обработчик изменения значения в инпуте */
        const handleTextValueChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (!filterValue || filterValue(e.target.value)) {
                setTextValue(e.target.value);
            }
            dispatchPath({ type: 'opened_first_level' });
            dispatchFocusedPath({ type: 'reset' });
        };

        const handleClickArrow = (e: MouseEvent<HTMLElement>) => {
            handleListToggle(!isListOpened);

            // При клике на иконку закрытия фокус не должен становиться в инпут.
            e.stopPropagation();
        };

        /* Обработчик клика на таргет */
        const handleTargetClick = () => {
            if (!isListOpened) {
                handleListToggle(true);
            }
        };

        /* Метод получения чипов в определенном формате */
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

        /* Обработчик чипов */
        const handleChipClick = (chip: { value: string; label: string; disabled: boolean }) => {
            if (!Array.isArray(value)) return;

            if (isTargetAmount) {
                // При закрытии чипа в режиме isTargetAmount в value оставляем только disabled-элементы
                handleChange(
                    value.filter((val) => valueToItemMap?.get(val)?.disabled),
                    null,
                );
            } else {
                handleChange(
                    value.filter((val) => val !== chip.value),
                    valueToItemMap.get(chip.value) || { value: chip.value, label: chip.label },
                );
            }
        };

        /**
         * Effects
         */
        /* Логика работы при клике за пределами выпадающего списка */
        useOutsideClick(() => {
            if (!isListOpened || alwaysOpened) {
                return;
            }

            handleListToggle(false);
        }, [floatingPopoverRef, listWrapperRef]);

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
        }, [value]);

        // Эффект для раскрытия дерева при поиске.
        useLayoutEffect(() => {
            if (treeView) {
                // Если поле ввода стало пустым или если пользователь выбирает элемент,
                // то скрываем все узлы дерева и выходим из эффекта.
                if (textValue === '' || textValue === currentLabel) {
                    dispatchTreePath({ type: 'reset' });
                    return;
                }

                // Иначе раскрываем все узлы, когда пользователь начинает вводить текст в поле ввода.
                dispatchTreePath({
                    type: 'expand_by_key',
                    value: { filteredItems, filterCb: filter || defaultFilter, textValue },
                });
            }
        }, [textValue]);

        /**
         * Vars
         */
        const activeDescendantItemValue = getItemByFocused(focusedPath, filteredFocusedToValueMap)?.value || '';
        const withArrowInverse = isListOpened ? classes.arrowInverse : undefined;

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
                {nativeMode && (
                    <SelectNative
                        items={valueToItemMap}
                        name={name}
                        value={value}
                        multiple={multiple}
                        handleChange={handleChange}
                        outerOnChange={outerOnChange as any}
                        ref={ref as ForwardedRef<HTMLSelectElement>}
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
                            renderSelectionIcon,
                            treeId,
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-underscore-dangle
                            _checkboxAppearance: (rest as any)._checkboxAppearance,
                            treePath,
                            dispatchTreePath,
                            arrowPlacement,
                            valueToPathMap,
                            singleLine,
                        }}
                    >
                        <FloatingPopover
                            ref={floatingPopoverRef}
                            opened={isListOpened}
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
                                            contentRight || contentRight !== undefined ? (
                                                contentRight
                                            ) : (
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
                                            )
                                        }
                                        textBefore={textBefore}
                                        textAfter={textAfter}
                                        onKeyDown={onKeyDown}
                                        leftHelper={
                                            helperText && (
                                                <StyledLeftHelper onClick={(e) => e.stopPropagation()}>
                                                    {helperText}
                                                </StyledLeftHelper>
                                            )
                                        }
                                        role="combobox"
                                        aria-autocomplete="list"
                                        aria-controls={`${treeId}_tree_level_1`}
                                        aria-expanded={isListOpened}
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
                            shift={shift}
                            flip={flip}
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
                                        listMaxHeight={listMaxHeight}
                                        onScroll={virtual ? undefined : onScroll}
                                        virtual={virtual}
                                        beforeList={beforeList}
                                        afterList={afterList}
                                        emptyStateDescription={emptyStateDescription}
                                    />
                                ) : (
                                    <ListWrapper ref={listWrapperRef} listWidth={listWidth}>
                                        <Ul
                                            role="tree"
                                            id={`${treeId}_tree_level_1`}
                                            aria-multiselectable={Boolean(multiple)}
                                            listMaxHeight={listMaxHeight}
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
                                                    description={emptyStateDescription || 'Ничего не найдено'}
                                                />
                                            ) : (
                                                <>
                                                    {virtual ? (
                                                        <VirtualList
                                                            items={filteredItems}
                                                            listMaxHeight={listMaxHeight}
                                                            onScroll={onScroll}
                                                            renderItem={(item, index) => (
                                                                <Inner
                                                                    item={item}
                                                                    currentLevel={0}
                                                                    path={['root']}
                                                                    dispatchPath={dispatchPath}
                                                                    index={index}
                                                                    listWidth={listWidth}
                                                                    portal={listWrapperRef}
                                                                    shift={shift}
                                                                    flip={flip}
                                                                />
                                                            )}
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
                                                                shift={shift}
                                                                flip={flip}
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
            css: readOnlyCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
    },
};
