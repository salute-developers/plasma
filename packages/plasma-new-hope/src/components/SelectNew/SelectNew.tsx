import React, { forwardRef, useState, useReducer, useMemo, createContext } from 'react';

import { RootProps } from '../../engines';
import type { HandleGlobalToggleType } from '../Dropdown/Dropdown.types';
import { isEmpty } from '../../utils';

import { initialItemsTransform, updateAncestors, updateDescendants, updateSingleAncestors } from './utils';
import { Inner } from './elements/Inner/Inner';
import { Target } from './elements/Target/Target';
import { pathReducer, focusedPathReducer } from './reducers';
import { usePathMaps } from './hooks/usePathMaps';
import { StyledPopover, Ul, base } from './SelectNew.styles';
import type { SelectNewProps } from './SelectNew.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const Context = createContext<any>(null);

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectNewRoot = (Root: RootProps<HTMLDivElement, any>) =>
    forwardRef<HTMLDivElement, SelectNewProps>(
        (
            {
                multiselect = false,
                target = 'button',
                separator,
                value,
                onChange,
                status,
                placeholder,
                helperText,
                disabled,
                onItemSelect,
                isOpen,
                listOverflow,
                listHeight,
                items,
                size,
                targetView = 'default',
                ...rest
            },
            ref,
        ) => {
            const transformedItems = useMemo(() => initialItemsTransform(items), [items]);

            const [pathMap, focusedToValueMap, checkedMap, valueToItemMap] = usePathMaps(
                transformedItems,
                value,
                multiselect,
            );

            console.log('render', value);

            const [path, dispatchPath] = useReducer(pathReducer, []);
            const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
            const [checked, setChecked] = useState(checkedMap);

            // console.log('checked', checked, performance.now());

            const handleToggle: HandleGlobalToggleType = (opened) => {
                if (opened) {
                    dispatchPath({ type: 'opened_first_level' });
                } else {
                    dispatchFocusedPath({ type: 'reset' });
                    dispatchPath({ type: 'reset' });
                }
            };

            const handleCheckboxChange = (item) => {
                const checkedCopy = new Map(checked);

                if (!checkedCopy.get(item.value)) {
                    checkedCopy.set(item.value, true);
                    updateDescendants(item, checkedCopy, true);
                } else {
                    checkedCopy.set(item.value, false);
                    updateDescendants(item, checkedCopy, false);
                }

                updateAncestors(item, checkedCopy);

                const newValues = [];

                valueToItemMap.forEach((value, key) => {
                    if (checkedCopy.get(key)) {
                        newValues.push(value.value);
                    }
                });

                onChange(newValues);

                setChecked(checkedCopy);
            };

            const handleItemClick = (e: any, item) => {
                if (isEmpty(item.items)) {
                    if (multiselect) {
                        handleCheckboxChange(item);
                    } else {
                        e.stopPropagation();

                        const checkedCopy = new Map(checked);

                        const isCurrentChecked = checkedCopy.get(item.value);

                        checkedCopy.forEach((_, key) => {
                            checkedCopy.set(key, false);
                        });

                        if (!isCurrentChecked) {
                            checkedCopy.set(item.value, 'done');
                            updateSingleAncestors(item, checkedCopy, 'dot');
                        }

                        onChange(isCurrentChecked ? '' : item.value);

                        setChecked(checkedCopy);
                    }
                }
            };

            const handleChipClick = (currentValue) => {
                if (multiselect) {
                    handleCheckboxChange(valueToItemMap.get(currentValue));
                } else {
                    const checkedCopy = new Map(checked);

                    checkedCopy.forEach((_, key) => {
                        checkedCopy.set(key, false);
                    });

                    onChange('');
                    setChecked(checkedCopy);
                }
            };

            const isCurrentListOpen = Boolean(path[0]);

            return (
                <Root ref={ref} size={size} {...rest}>
                    <Context.Provider
                        value={{
                            focusedPath,
                            checked,
                            multiselect,
                            size,
                            handleCheckboxChange,
                            handleItemClick,
                        }}
                    >
                        <StyledPopover
                            isOpen={isCurrentListOpen}
                            usePortal={false}
                            placement="bottom-start"
                            onToggle={handleToggle}
                            trigger="click"
                            isFocusTrapped={false}
                            target={
                                <Target
                                    opened={isCurrentListOpen}
                                    target={target}
                                    value={value}
                                    label="Label"
                                    disabled={disabled}
                                    size={size}
                                    id="custom_id"
                                    onChange={() => {}}
                                    onKeyDown={() => {}}
                                    targetView={targetView}
                                    multiselect={multiselect}
                                    valueToItemMap={valueToItemMap}
                                    onChipClick={handleChipClick}
                                />
                            }
                            preventOverflow={false}
                            closeOnOverlayClick
                        >
                            <Ul role="tree" id="tree_level_1">
                                {transformedItems.map((item, index) => (
                                    <Inner
                                        key={`${index}/0`}
                                        item={item}
                                        currentLevel={0}
                                        path={path}
                                        dispatchPath={dispatchPath}
                                        index={index}
                                    />
                                ))}
                            </Ul>
                        </StyledPopover>
                    </Context.Provider>
                </Root>
            );
        },
    );

export const selectNewConfig = {
    name: 'SelectNew',
    tag: 'div',
    layout: selectNewRoot,
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
        size: 'm',
    },
};
