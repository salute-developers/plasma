import React, { forwardRef, useCallback, useReducer, useRef } from 'react';
import { safeUseId } from 'src/utils';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { useOutsideClick } from '../../hooks';

import { pathReducer } from './reducers/pathReducer';
import { focusedPathReducer } from './reducers/focusedPathReducer';
import { DropdownInner } from './ui';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { Ul, base, ListWrapper } from './Dropdown.styles';
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
                listMaxHeight,
                listWidth,
                listHeight,
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
            const initialPath = alwaysOpened ? ['root'] : [];

            const [path, dispatchPath] = useReducer(pathReducer, initialPath);
            const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

            const isCurrentListOpen = Boolean(path[0]);

            const [pathMap, focusedToValueMap] = useHashMaps(items);

            const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value || '';

            const floatingPopoverRef = useRef<HTMLDivElement>(null);
            const listWrapperRef = useRef<HTMLDivElement>(null);

            const treeId = safeUseId();

            /* Логика работы при клике за пределами выпадающего списка */
            useOutsideClick(
                (event) => {
                    if (!isCurrentListOpen || !closeOnOverlayClick || alwaysOpened) {
                        return;
                    }

                    dispatchPath({ type: 'reset' });
                    dispatchFocusedPath({ type: 'reset' });

                    if (onToggle) {
                        onToggle(false, event);
                    }
                },
                [floatingPopoverRef, listWrapperRef],
            );

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
                        isInner={false}
                    >
                        <Root
                            className={cx(className, classes.dropdownRoot)}
                            ref={ref}
                            view={view}
                            size={size}
                            {...rest}
                        >
                            <ListWrapper ref={listWrapperRef} listWidth={listWidth}>
                                <Ul
                                    id={`${treeId}_tree_level_1`}
                                    role="tree"
                                    listMaxHeight={listMaxHeight || listHeight}
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
                                            listWidth={listWidth}
                                            portal={listWrapperRef}
                                        />
                                    ))}

                                    {afterList}
                                </Ul>
                            </ListWrapper>
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
