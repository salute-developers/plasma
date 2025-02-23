import React, { forwardRef, useCallback, useReducer, useRef } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { useOutsideClick } from '../../hooks';

import { pathReducer } from './reducers/pathReducer';
import { focusedPathReducer } from './reducers/focusedPathReducer';
import { DropdownInner } from './ui';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { Ul, base } from './Dropdown.styles';
import { childrenWithProps, getItemByFocused, getItemId, getPlacement } from './utils';
import type { DropdownProps, HandleGlobalToggleType } from './Dropdown.types';
import { classes } from './Dropdown.tokens';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';
import { useHashMaps } from './hooks/useHashMaps';
import { FloatingPopover } from './FloatingPopover';
import { Context } from './Dropdown.context';

/**
 * Выпадающий список.
 */
export const dropdownRoot = (Root: RootProps<HTMLDivElement, Omit<DropdownProps, 'items'>>) =>
    forwardRef<HTMLDivElement, DropdownProps>(
        (
            {
                items,
                children,
                placement,
                offset,
                closeOnOverlayClick = true,
                onToggle,
                size,
                view,
                itemRole = 'treeitem',
                className,
                listWidth,
                listHeight,
                listOverflow,
                closeOnSelect = true,
                onHover,
                onItemSelect,
                onItemClick,
                trigger = 'click',
                openByRightClick = false,
                variant = 'normal',
                hasArrow = true,
                alwaysOpened = false,
                portal,
                renderItem,
                zIndex,
                beforeList,
                afterList,
                ...rest
            },
            ref,
        ) => {
            const [path, dispatchPath] = useReducer(pathReducer, []);
            const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

            const isCurrentListOpen = alwaysOpened || Boolean(path[0]);

            const [pathMap, focusedToValueMap] = useHashMaps(items);

            const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value || '';

            const floatingPopoverRef = useRef<HTMLDivElement>(null);

            const treeId = safeUseId();

            // Логика работы при клике за пределами выпадающего списка
            const targetRef = useOutsideClick<HTMLUListElement>((event) => {
                if (!isCurrentListOpen || !closeOnOverlayClick || alwaysOpened) {
                    return;
                }

                dispatchPath({ type: 'reset' });
                dispatchFocusedPath({ type: 'reset' });

                if (onToggle) {
                    onToggle(false, event);
                }
            }, floatingPopoverRef);

            const handleGlobalToggle: HandleGlobalToggleType = (opened, event) => {
                if (alwaysOpened || opened) {
                    dispatchPath({ type: 'opened_first_level' });
                } else {
                    dispatchFocusedPath({ type: 'reset' });
                    dispatchPath({ type: 'reset' });
                }

                if (onToggle) {
                    onToggle(opened, event);
                }
            };

            const onContextMenu = useCallback(
                (e: React.MouseEvent) => {
                    e.preventDefault();

                    if (alwaysOpened) {
                        return;
                    }

                    handleGlobalToggle(!isCurrentListOpen, e);
                },
                [handleGlobalToggle, isCurrentListOpen, alwaysOpened],
            );

            const { onKeyDown } = useKeyNavigation({
                focusedPath,
                dispatchFocusedPath,
                path,
                dispatchPath,
                pathMap,
                focusedToValueMap,
                handleGlobalToggle,
                closeOnSelect,
                onItemSelect,
                onItemClick,
            });

            return (
                <Context.Provider
                    value={{
                        focusedPath,
                        size,
                        variant,
                        itemRole,
                        handleGlobalToggle,
                        closeOnSelect,
                        onHover,
                        onItemClick,
                        onItemSelect,
                        hasArrow,
                        treeId,
                        renderItem,
                    }}
                >
                    <FloatingPopover
                        ref={floatingPopoverRef}
                        opened={isCurrentListOpen}
                        onToggle={handleGlobalToggle}
                        placement={getPlacement(placement)}
                        offset={offset}
                        portal={portal}
                        trigger={trigger}
                        target={childrenWithProps(children, {
                            role: 'combobox',
                            'aria-controls': `${treeId}_tree_level_1`,
                            'aria-expanded': isCurrentListOpen,
                            'aria-activedescendant': activeDescendantItemValue
                                ? getItemId(treeId, activeDescendantItemValue.toString())
                                : '',
                            onKeyDown,
                            onContextMenu: openByRightClick ? onContextMenu : undefined,
                        })}
                        zIndex={zIndex}
                    >
                        <Root
                            className={cx(className, classes.dropdownRoot)}
                            ref={ref}
                            view={view}
                            size={size}
                            style={{ display: 'inline-block' }}
                            {...rest}
                        >
                            <Ul
                                ref={targetRef}
                                id={`${treeId}_tree_level_1`}
                                role="tree"
                                listHeight={listHeight}
                                listOverflow={listOverflow}
                                listWidth={listWidth}
                            >
                                {beforeList}

                                {items.map((item, index) => (
                                    <DropdownInner
                                        key={`${index}/0`}
                                        item={item}
                                        currentLevel={0}
                                        trigger={trigger}
                                        path={path}
                                        dispatchPath={dispatchPath}
                                        index={index}
                                        listHeight={listHeight}
                                        listOverflow={listOverflow}
                                        listWidth={listWidth}
                                    />
                                ))}

                                {afterList}
                            </Ul>
                        </Root>
                    </FloatingPopover>
                </Context.Provider>
            );
        },
    );

export const dropdownConfig = {
    name: 'Dropdown',
    tag: 'div',
    layout: dropdownRoot,
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
