import React, { forwardRef, useReducer, useState, useMemo } from 'react';

import { RootProps } from '../../engines';
import type { HandleGlobalToggleType } from '../Dropdown/Dropdown.types';
import { Button } from '../../examples/plasma_b2c/components/Button/Button';

import { initialItemsTransform } from './utils';
import { Inner } from './elements/Inner/Inner';
import { pathReducer } from './reducers/pathReducer';
import { focusedPathReducer } from './reducers/focusedPathReducer';
import { useHashMaps } from './hooks/useHashMaps';
import { StyledPopover, Ul } from './SelectNew.styles';
import type { SelectNewProps } from './SelectNew.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectNewRoot = (Root: RootProps<HTMLDivElement, any>) =>
    forwardRef<HTMLDivElement, SelectNewProps>(({ items, multiselect = false, size, ...rest }, ref) => {
        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

        const transformedItems = useMemo(() => initialItemsTransform(items), [items]);
        const [pathMap, focusedToValueMap, checkedMap] = useHashMaps(transformedItems);

        const [checked, setChecked] = useState(checkedMap);

        console.log('checked', checked);

        const handleGlobalToggle: HandleGlobalToggleType = (opened) => {
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
                <StyledPopover
                    isOpen={isCurrentListOpen}
                    usePortal={false}
                    placement="bottom-start"
                    onToggle={handleGlobalToggle}
                    trigger="click"
                    isFocusTrapped={false}
                    target={<Button text="Список стран" />}
                    preventOverflow={false}
                    closeOnOverlayClick
                >
                    <Ul role="tree" id="tree_level_1">
                        {transformedItems.map((item, index) => (
                            <Inner
                                key={`${index}/0`}
                                item={item}
                                currentLevel={0}
                                focusedPath={focusedPath}
                                path={path}
                                dispatchPath={dispatchPath}
                                index={index}
                                handleGlobalToggle={handleGlobalToggle}
                                checked={checked}
                                setChecked={setChecked}
                                multiselect={multiselect}
                                size={size}
                            />
                        ))}
                    </Ul>
                </StyledPopover>
            </Root>
        );
    });

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
