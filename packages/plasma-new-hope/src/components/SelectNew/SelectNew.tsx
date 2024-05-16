import React, { forwardRef, useReducer, useState, useMemo, createContext } from 'react';

import { RootProps } from '../../engines';
import type { HandleGlobalToggleType } from '../Dropdown/Dropdown.types';

import { initialItemsTransform } from './utils';
import { Inner } from './elements/Inner/Inner';
import { Target } from './elements/Target/Target';
import { pathReducer, focusedPathReducer } from './reducers';
import { usePathMaps } from './hooks/usePathMaps';
import { StyledPopover, Ul } from './SelectNew.styles';
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
                ...rest
            },
            ref,
        ) => {
            const [path, dispatchPath] = useReducer(pathReducer, []);
            const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

            const transformedItems = useMemo(() => initialItemsTransform(items), [items]);
            const [pathMap, focusedToValueMap, checkedMap, valueToItemMap] = usePathMaps(transformedItems);

            const [checked, setChecked] = useState(checkedMap);

            const [values, setValues] = useState<Array<any>>([]);

            // console.log('checked', checked);
            console.log('values', values);

            const handleToggle: HandleGlobalToggleType = (opened) => {
                if (opened) {
                    dispatchPath({ type: 'opened_first_level' });
                } else {
                    dispatchFocusedPath({ type: 'reset' });
                    dispatchPath({ type: 'reset' });
                }
            };

            const isCurrentListOpen = Boolean(path[0]);

            return (
                <Root ref={ref} size={size} {...rest}>
                    <Context.Provider
                        value={{ focusedPath, checked, setChecked, multiselect, size, setValues, valueToItemMap }}
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
                                    values={values}
                                    label="Label"
                                    disabled={disabled}
                                    size={size}
                                    id="custom_id"
                                    onChange={() => {}}
                                    onKeyDown={() => {}}
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
    base: '',
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
