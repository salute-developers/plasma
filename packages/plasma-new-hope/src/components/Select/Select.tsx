import React, {
    forwardRef,
    useState,
    useReducer,
    useMemo,
    useLayoutEffect,
    useRef,
    ChangeEvent,
    ForwardedRef,
} from 'react';
import { RootProps } from 'src/engines';
import { isEmpty, safeUseId } from 'src/utils';
import { useOutsideClick } from 'src/hooks';

import type { HintProps } from '../TextField/TextField.types';

import { useKeyNavigation, getItemByFocused } from './hooks/useKeyboardNavigation';
import { initialItemsTransform, updateAncestors, updateDescendants, updateSingleAncestors, getView } from './utils';
import { Inner, Target, VirtualList, SelectAll, TreeList } from './ui';
import { pathReducer, focusedPathReducer, treePathReducer } from './reducers';
import { usePathMaps } from './hooks/usePathMaps';
import { Ul, base, ListWrapper } from './Select.styles';
import type { MergedSelectProps, RequiredProps } from './Select.types';
import type { MergedDropdownNodeTransformed } from './ui/Inner/ui/Item/Item.types';
import { FloatingPopover } from './FloatingPopover';
import { SelectNative } from './ui/SelectNative/SelectNative';
import { Context } from './Select.context';

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectRoot = (Root: RootProps<HTMLButtonElement, Omit<MergedSelectProps, 'items'>>) =>
    forwardRef<HTMLButtonElement, MergedSelectProps>((props, ref) => {
        const {
            // eslint-disable-block @typescript-eslint/ban-ts-comment
            id,
            value: outerValue,
            onChange: outerOnChange,
            target = 'textfield-like',
            items,
            treeView = false,
            arrowPlacement = 'left',
            placement = 'bottom',
            label,
            labelPlacement,
            placeholder,
            helperText,
            disabled = false,
            readOnly = false,
            view: outerView,
            size,
            listOverflow,
            listHeight,
            listMaxHeight,
            listWidth,
            contentLeft,
            contentRight,
            onScrollBottom,
            onScroll,
            chipView,
            variant = 'normal',
            portal,
            renderValue,
            renderItem,
            renderSelectionIcon,
            status,
            onItemSelect,
            separator,
            closeAfterSelect: outerCloseAfterSelect,
            isTargetAmount,
            beforeList,
            afterList,
            zIndex,
            name,
            defaultValue,
            virtual = false,
            onToggle,
            chipType,
            multiselect,
            mode = 'default',
            chipClickArea,
            // @ts-ignore
            _offset,

            // Извлекаем пропсы для required и hint, чтобы они не попадали в DOM.
            // @ts-ignore
            required,
            // @ts-ignore
            requiredPlacement,
            // @ts-ignore
            hasRequiredIndicator,
            // @ts-ignore
            optional,
            // @ts-ignore
            hintText,
            // @ts-ignore
            hintTrigger,
            // @ts-ignore
            hintView,
            // @ts-ignore
            hintSize,
            // @ts-ignore
            hintTargetPlacement,
            // @ts-ignore
            hintPlacement,
            // @ts-ignore
            hintWidth,
            // @ts-ignore
            hintHasArrow,
            // @ts-ignore
            hasHint,
            ...rest
        } = props;
        const transformedItems = useMemo(() => initialItemsTransform(items || []), [items]);

        // Создаем структуры для быстрой работы с деревом
        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap, valueToPathMap] = usePathMaps(
            transformedItems,
        );

        const [internalValue, setInternalValue] = useState<string | number | Array<string | number>>(
            props.multiselect ? [] : '',
        );

        const value = outerValue !== null && outerValue !== undefined ? outerValue : internalValue;

        const floatingPopoverRef = useRef<HTMLDivElement>(null);

        // Состояния дерева элементов
        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [treePath, dispatchTreePath] = useReducer(treePathReducer, {});
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const isCurrentListOpen = Boolean(path[0]);
        const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value.toString() || '';
        const closeAfterSelect = outerCloseAfterSelect ?? !props.multiselect;
        const treeId = safeUseId();
        const listWrapperRef = useRef<HTMLDivElement>(null);
        const view = target === 'textfield-like' && (disabled || readOnly) ? 'default' : getView(status, outerView);
        const rootRef = useRef<HTMLInputElement>(null);

        // Собираем объект с пропсами для required и прокидываем их напрямую в компонент Textfield.
        const requiredProps =
            props.target === 'button-like'
                ? undefined
                : ({
                      required,
                      requiredPlacement,
                      hasRequiredIndicator,
                      optional,
                  } as RequiredProps);

        // Собираем объект с пропсами для hint и прокидываем их напрямую в компонент Textfield.
        const hintProps =
            props.target === 'button-like'
                ? undefined
                : ({
                      hintText,
                      hintTrigger,
                      hintView,
                      hintSize,
                      hintTargetPlacement,
                      hintPlacement,
                      hintWidth,
                      hintHasArrow,
                  } as HintProps);

        /* Логика работы при клике за пределами выпадающего списка */
        useOutsideClick(() => {
            if (!isCurrentListOpen) {
                return;
            }

            handleListToggle(false);
        }, [floatingPopoverRef, listWrapperRef]);

        const onChange = (
            newValue?: string | number | Array<string | number> | ChangeEvent<HTMLSelectElement> | null,
            item?: MergedDropdownNodeTransformed | null,
        ) => {
            if (props.onChange) {
                // Условие для отправки если компонент используется без формы.
                if (!props.name && (typeof newValue === 'string' || Array.isArray(newValue))) {
                    props.onChange(newValue as any, item || null);
                }

                // Условие для отправки если компонент используется с формой.
                // Убрать условие "typeof ref === 'function'" в PLASMA 2.0
                if (props.name && typeof newValue === 'object' && !Array.isArray(newValue)) {
                    props.onChange(newValue as any, item || null);
                }
            }

            // Условие для изменения внутреннего значения (только если newValue строка или массив строк).
            if (typeof newValue === 'string' || Array.isArray(newValue)) {
                setInternalValue(newValue);
            }
        };

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

                // Скроллим чипы к левому краю при закрытии компонента
                const el = rootRef?.current?.querySelector('.input-scrollable-wrapper');
                if (multiselect && value.length > 0 && el) {
                    el.scrollLeft = 0;
                }
            }

            if (onToggle) {
                onToggle(opened);
            }
        };

        const handleCheckboxChange = (item: MergedDropdownNodeTransformed) => {
            if (!props.multiselect) {
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

            const newValues: Array<string | number> = [];

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

            if (closeAfterSelect) {
                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });
                dispatchTreePath({ type: 'reset' });
            }

            if (onChange) {
                onChange(newValues, item);
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
                dispatchTreePath({ type: 'reset' });
            }

            // Закрываем список, если элемент уже выбран.
            if (mode === 'radio' && isCurrentChecked) {
                return;
            }

            if (onChange) {
                onChange(isCurrentChecked ? '' : item.value, item);
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

        const handleScroll = (e: React.UIEvent<HTMLElement>) => {
            if (onScroll) {
                onScroll(e);
            }

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
            treePath,
            dispatchTreePath,
            treeView,
            valueToPathMap,
            items: transformedItems,
        });

        // В данном эффекте мы следим за изменениями value снаружи и вносим коррективы в дерево чекбоксов.
        // Пример: когда юзер очистил value извне, тогда нужно пройтись по элементам и выключить все чекбоксы.
        useLayoutEffect(() => {
            const checkedCopy = new Map(valueToCheckedMap);

            checkedCopy.forEach((_, key) => {
                checkedCopy.set(key, false);
            });

            if (!isEmpty(value) || typeof value === 'number') {
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

        useLayoutEffect(() => {
            if (defaultValue) {
                setInternalValue(defaultValue as string | string[]);
            }
        }, [defaultValue]);

        return (
            <Root
                view={view}
                size={size}
                labelPlacement={labelPlacement}
                chipView={chipView}
                disabled={disabled}
                readOnly={readOnly}
                hintView={hintView}
                hintSize={hintSize}
                id={id}
                ref={rootRef}
                {...(rest as any)}
            >
                {name && (
                    <SelectNative
                        items={valueToItemMap}
                        name={name}
                        value={internalValue}
                        multiselect={props.multiselect}
                        onChange={onChange}
                        onSetValue={setInternalValue}
                        ref={ref as ForwardedRef<HTMLButtonElement>}
                    />
                )}
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
                    }}
                >
                    <FloatingPopover
                        ref={floatingPopoverRef}
                        opened={isCurrentListOpen}
                        onToggle={handleListToggle}
                        placement={placement}
                        portal={portal}
                        listWidth={listWidth}
                        offset={_offset}
                        target={(referenceRef) => (
                            <Target
                                ref={name ? null : ref}
                                value={value}
                                opened={isCurrentListOpen}
                                valueToItemMap={valueToItemMap}
                                label={label}
                                placeholder={placeholder}
                                onKeyDown={onKeyDown}
                                labelPlacement={labelPlacement}
                                size={size}
                                contentLeft={contentLeft}
                                contentRight={contentRight}
                                disabled={disabled}
                                readOnly={readOnly}
                                renderValue={renderValue}
                                selectProps={props}
                                inputWrapperRef={referenceRef as React.MutableRefObject<HTMLDivElement>}
                                multiselect={props.multiselect}
                                view={view}
                                helperText={helperText}
                                treeId={treeId}
                                activeDescendantItemValue={activeDescendantItemValue}
                                isTargetAmount={isTargetAmount}
                                onChange={onChange}
                                chipView={chipView}
                                separator={separator}
                                requiredProps={requiredProps}
                                hintProps={hintProps}
                            />
                        )}
                        zIndex={zIndex}
                        isInner={false}
                    >
                        <Root
                            view={view}
                            size={size}
                            labelPlacement={labelPlacement}
                            chipView={chipView}
                            disabled={disabled}
                            readOnly={readOnly}
                            {...(rest as any)}
                        >
                            {treeView ? (
                                <TreeList
                                    items={items}
                                    listMaxHeight={listMaxHeight}
                                    onScroll={virtual ? undefined : handleScroll}
                                    virtual={virtual}
                                    beforeList={beforeList}
                                    afterList={afterList}
                                />
                            ) : (
                                <ListWrapper ref={listWrapperRef} listWidth={listWidth}>
                                    <Ul
                                        role="tree"
                                        id={`${treeId}_tree_level_1`}
                                        aria-multiselectable={Boolean(props.multiselect)}
                                        listMaxHeight={listMaxHeight || listHeight}
                                        onScroll={virtual ? undefined : handleScroll}
                                        virtual={virtual}
                                    >
                                        {beforeList}

                                        {props.multiselect && props.selectAllOptions && (
                                            // TODO: #2004
                                            <SelectAll selectAllOptions={props.selectAllOptions} variant={variant} />
                                        )}

                                        {virtual ? (
                                            <VirtualList
                                                items={transformedItems}
                                                listMaxHeight={listMaxHeight || listHeight}
                                                onScroll={onScroll}
                                            />
                                        ) : (
                                            transformedItems.map((item, index) => (
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
                                        {afterList}
                                    </Ul>
                                </ListWrapper>
                            )}
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
