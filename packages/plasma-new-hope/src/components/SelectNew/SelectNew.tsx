import React, { forwardRef, useReducer, useState } from 'react';

import { RootProps } from '../../engines';
import type { HandleGlobalToggleType } from '../Dropdown/Dropdown.types';
import { Button } from '../../examples/plasma_b2c/components/Button/Button';

import { SelectInner } from './ui/SelectInner/SelectInner';
import { pathReducer } from './reducers/pathReducer';
import { focusedPathReducer } from './reducers/focusedPathReducer';
import { useHashMaps } from './hooks/useHashMaps';
import { StyledPopover, Ul } from './SelectNew.styles';
import type { SelectNewProps } from './SelectNew.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

const transform = (items: any, parent: any = null): any => {
    items.forEach((item) => {
        item.parent = parent;
        item.checked = false;
        item.indeterminate = false;
        item.RANDOM = 123;
        item.items = item.items ? transform(item.items, item) : null;
    });

    return items;
};

/**
 * Выпадающий список. Поддерживает выбор одного или нескольких значений.
 */
export const selectNewRoot = (Root: RootProps<HTMLDivElement, any>) =>
    forwardRef<HTMLDivElement, SelectNewProps>(({ items, ...rest }, ref) => {
        const [data, setData] = useState(transform(items));
        console.dir(data);

        // data[1].items[0].parent.RANDOM = 'STRING';
        // console.log('modified data', data);

        const [path, dispatchPath] = useReducer(pathReducer, []);
        const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

        const [pathMap, focusedToValueMap] = useHashMaps(items);

        const handleGlobalToggle: HandleGlobalToggleType = (opened, event) => {
            if (opened) {
                dispatchPath({ type: 'opened_first_level' });
            } else {
                dispatchFocusedPath({ type: 'reset' });
                dispatchPath({ type: 'reset' });
            }
        };

        const isCurrentListOpen = Boolean(path[0]);

        return (
            <Root ref={ref} {...rest}>
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
                        {data.map((item, index) => (
                            <SelectInner
                                key={`${index}/0`}
                                item={item}
                                currentLevel={0}
                                focusedPath={focusedPath}
                                path={path}
                                dispatchPath={dispatchPath}
                                index={index}
                                handleGlobalToggle={handleGlobalToggle}
                                data={data}
                                setData={setData}
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
