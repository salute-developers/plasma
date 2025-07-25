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
import { Inner, Target, VirtualList, SelectAll } from './ui';
import { pathReducer, focusedPathReducer } from './reducers';
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
            onScrollBottom,
            onScroll,
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
            beforeList,
            afterList,
            zIndex,
            name,
            defaultValue,
            virtual = false,
            onToggle,
            chipType,
            multiselect,
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
        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap, labelToItemMap] = usePathMaps(
            transformedItems,
        );

        const [internalValue, setInternalValue] = useState<string | number | Array<string | number>>(
            props.multiselect ? [] : '',
        );

        const value = outerValue !== null && outerValue !== undefined ? outerValue : internalValue;

        const floatingPopoverRef = useRef<HTMLDivElement>(null);

        // Состояния дерева элементов
        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const isCurrentListOpen = Boolean(path[0]);
        const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value.toString() || '';
        const closeAfterSelect = outerCloseAfterSelect ?? !props.multiselect;
        const treeId = safeUseId();
        const view = target === 'textfield-like' && (disabled || readOnly) ? 'default' : getView(status, outerView);

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

        const targetRef = useOutsideClick<HTMLUListElement>(() => {
            if (!isCurrentListOpen) {
                return;
            }

            dispatchPath({ type: 'reset' });
            dispatchFocusedPath({ type: 'reset' });

            if (onToggle) {
                onToggle(false);
            }
        }, floatingPopoverRef);

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

            if (!checkedCopy.get(item.value)) {
                checkedCopy.set(item.value, true);
                updateDescendants(item, checkedCopy, true, valueToItemMap);
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

        const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
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
                id={id}
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
                        treeId,
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // eslint-disable-next-line no-underscore-dangle
                        _checkboxAppearance: (rest as any)._checkboxAppearance,
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
                                labelToItemMap={labelToItemMap}
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
                            <ListWrapper listWidth={listWidth}>
                                <Ul
                                    role="tree"
                                    id={`${treeId}_tree_level_1`}
                                    aria-multiselectable={Boolean(props.multiselect)}
                                    listOverflow={listOverflow}
                                    listMaxHeight={listMaxHeight || listHeight}
                                    onScroll={virtual ? undefined : handleScroll}
                                    ref={targetRef}
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
                                            />
                                        ))
                                    )}
                                    {afterList}
                                </Ul>
                            </ListWrapper>
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
