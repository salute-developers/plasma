import React, { forwardRef, useMemo, useRef } from 'react';
import { cx, safeUseId } from 'src/utils';
import { RootProps } from 'src/engines';

import { Inner } from './ui';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, ListWrapper, Ul } from './Dropdown.styles';
import { childrenWithProps, getItemByFocused, getItemId, getPlacement, getVisibleItems } from './utils';
import type { DropdownProps } from './Dropdown.types';
import { classes } from './Dropdown.tokens';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';
import { useList } from './hooks/useList';
import { usePathMaps } from './hooks/usePathMaps';
import { FloatingPopover } from './FloatingPopover';
import { Context } from './Dropdown.context';

/**
 * Выпадающий список с поддержкой вложенных пунктов.
 */
export const dropdownRoot = (Root: RootProps<HTMLDivElement, Omit<DropdownProps, 'items'>>) =>
    forwardRef<HTMLDivElement, DropdownProps>(
        (
            {
                items,
                trigger = 'click',
                placement = 'bottom',
                children,
                variant = 'normal',
                zIndex = 1000,
                listMaxHeight,
                listWidth,
                portal,
                renderItem,
                beforeList,
                afterList,
                onToggle,
                alwaysOpened = false,
                onHover,
                onItemSelect,
                openByRightClick = false,
                offset = [0, 8],
                closeOnSelect = true,
                closeOnOverlayClick = true,
                itemRole = 'option',
                disabled,

                size,
                view,
                className,
                ...rest
            },
            ref,
        ) => {
            /**
             * Refs
             */
            const floatingPopoverRef = useRef<HTMLDivElement>(null);
            const listWrapperRef = useRef<HTMLDivElement>(null);

            /**
             * Hooks
             */
            const visibleItems = useMemo(() => getVisibleItems(items), [items]);

            const { path, dispatchPath, dispatchFocusedPath, focusedPath, handleGlobalToggle } = useList({
                alwaysOpened,
                disabled,
                onToggle,
                closeOnOverlayClick,
                floatingPopoverRef,
                listWrapperRef,
            });

            const [pathMap, focusedToValueMap] = usePathMaps(visibleItems);

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
                disabled,
            });

            const isCurrentListOpen = Boolean(path[0]);
            const activeDescendantItemValue = getItemByFocused(focusedPath, focusedToValueMap)?.value || '';
            const treeId = safeUseId();

            const onContextMenu = (e: React.MouseEvent) => {
                e.preventDefault();

                if (alwaysOpened || disabled) {
                    return;
                }

                handleGlobalToggle(!isCurrentListOpen, e);
            };

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
                        onItemSelect,
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
                                <Ul id={`${treeId}_tree_level_1`} role="tree" listMaxHeight={listMaxHeight}>
                                    {beforeList}

                                    {visibleItems.map((item, index) => (
                                        <Inner
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
