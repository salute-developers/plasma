import React, { forwardRef, useReducer } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { pathReducer } from './reducers/pathReducer';
import { focusedPathReducer } from './reducers/focusedPathReducer';
import { DropdownInner } from './ui';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { Ul, StyledPopover, base } from './Dropdown.styles';
import { getPlacements, childrenWithProps } from './utils';
import type { DropdownProps, HandleGlobalToggleType } from './Dropdown.types';
import { classes } from './Dropdown.tokens';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';
import { useHashMaps } from './hooks/useHashMaps';

/**
 * Выпадающий список.
 */
export const dropdownRoot = (Root: RootProps<HTMLDivElement, DropdownProps>) =>
    forwardRef<HTMLDivElement, DropdownProps>(
        (
            {
                items,
                children,
                placement = 'bottom',
                offset = [0, 0],
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
                variant = 'normal',
                hasArrow = true,
                ...rest
            },
            ref,
        ) => {
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

                if (onToggle) {
                    onToggle(opened, event);
                }
            };

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

            const isCurrentListOpen = Boolean(path[0]);

            const getActiveDescendant = () => {
                const focusedPathAsString = focusedPath.reduce((acc, n) => `${acc}/${n}`, '').replace(/^(\/)/, '');
                return focusedToValueMap?.get(focusedPathAsString)?.value.toString();
            };

            return (
                <Root
                    className={cx(className, classes.dropdownRoot)}
                    ref={ref}
                    view={view}
                    size={size}
                    items={items}
                    {...rest}
                >
                    <StyledPopover
                        isOpen={isCurrentListOpen}
                        usePortal={false}
                        onToggle={handleGlobalToggle}
                        offset={offset}
                        placement={getPlacements(placement)}
                        trigger={trigger}
                        closeOnOverlayClick={closeOnOverlayClick}
                        isFocusTrapped={false}
                        target={childrenWithProps(children, {
                            role: 'combobox',
                            'aria-controls': 'tree_level_1',
                            'aria-expanded': isCurrentListOpen,
                            'aria-activedescendant': getActiveDescendant(),
                            onKeyDown,
                        })}
                        preventOverflow={false}
                    >
                        <Ul
                            listHeight={listHeight}
                            listOverflow={listOverflow}
                            role="tree"
                            id="tree_level_1"
                            listWidth={listWidth}
                        >
                            {items.map((item, index) => (
                                <DropdownInner
                                    key={`${index}/0`}
                                    item={item}
                                    currentLevel={0}
                                    focusedPath={focusedPath}
                                    trigger={trigger}
                                    path={path}
                                    dispatchPath={dispatchPath}
                                    index={index}
                                    itemRole={itemRole}
                                    listHeight={listHeight}
                                    listOverflow={listOverflow}
                                    handleGlobalToggle={handleGlobalToggle}
                                    closeOnSelect={closeOnSelect}
                                    onHover={onHover}
                                    onItemSelect={onItemSelect}
                                    onItemClick={onItemClick}
                                    listWidth={listWidth}
                                    variant={variant}
                                    hasArrow={hasArrow}
                                />
                            ))}
                        </Ul>
                    </StyledPopover>
                </Root>
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
