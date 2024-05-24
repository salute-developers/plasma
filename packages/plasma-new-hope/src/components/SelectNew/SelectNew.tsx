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
import type { SelectNewProps, ItemContext } from './SelectNew.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { ItemOptionTransformed } from './elements/Inner/elements/Item/Item.types';

export const Context = createContext<ItemContext>({} as ItemContext);

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectNewRoot = (Root: RootProps<HTMLButtonElement, SelectNewProps>) =>
    forwardRef<HTMLButtonElement, SelectNewProps>((props, ref) => {
        const {
            value,
            onChange,
            target = 'textfield',
            multiselect = false,
            separator,
            asNative = false,
            items,
            label,
            placeholder,
            helperText,
            isTargetAmount = false,
            disabled = false,
            view,
            size,
            isOpen,
            listOverflow,
            listHeight,
            status,
            isLabelInside,
            ...rest
        } = props;

        const transformedItems = useMemo(() => initialItemsTransform(items), [items]);

        const [pathMap, focusedToValueMap, valueToCheckedMap, valueToItemMap] = usePathMaps(
            transformedItems,
            value,
            multiselect,
        );

        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);
        const [checked, setChecked] = useState(valueToCheckedMap);

        const handleToggle: HandleGlobalToggleType = (opened) => {
            if (opened) {
                dispatchPath({ type: 'opened_first_level' });
            } else {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
            }
        };

        const handleCheckboxChange = (item: ItemOptionTransformed) => {
            const checkedCopy = new Map(checked);

            if (!checkedCopy.get(item.value.toString())) {
                checkedCopy.set(item.value.toString(), true);
                updateDescendants(item, checkedCopy, true);
            } else {
                checkedCopy.set(item.value.toString(), false);
                updateDescendants(item, checkedCopy, false);
            }

            updateAncestors(item, checkedCopy);

            const newValues: Array<string> = [];

            valueToItemMap.forEach((item, key) => {
                if (checkedCopy.get(key)) {
                    newValues.push(item.value.toString());
                }
            });

            onChange(newValues as any);

            setChecked(checkedCopy);
        };

        const handleItemClick = (e: React.MouseEvent<HTMLElement>, item: ItemOptionTransformed) => {
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

                    onChange((isCurrentChecked ? '' : item.value) as any);

                    setChecked(checkedCopy);
                }
            }
        };

        const handleChipClick = (currentValue: string) => {
            if (!multiselect) {
                handleCheckboxChange(valueToItemMap.get(currentValue) as ItemOptionTransformed);
            } else {
                const checkedCopy = new Map(checked);

                checkedCopy.forEach((_, key) => {
                    checkedCopy.set(key, false);
                });

                onChange('' as any);
                setChecked(checkedCopy);
            }
        };

        const isCurrentListOpen = Boolean(path[0]);

        return (
            <Root ref={ref} size={size} view={view} items={items} {...(rest as any)}>
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
                                isTargetAmount={isTargetAmount}
                                multiselect={multiselect}
                                valueToItemMap={valueToItemMap}
                                onChipClick={handleChipClick}
                                label={label}
                                placeholder={placeholder}
                                isLabelInside={isLabelInside}
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
    });

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
