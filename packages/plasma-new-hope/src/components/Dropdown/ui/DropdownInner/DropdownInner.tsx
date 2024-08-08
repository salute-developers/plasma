import React from 'react';
import type { FC } from 'react';

import { DropdownItem } from '..';
import { Ul, StyledPopover } from '../../Dropdown.styles';

import { DropdownInnerProps } from './DropdownInner.type';

const DropdownInner: FC<DropdownInnerProps> = ({
    item,
    currentLevel,
    focusedPath,
    path,
    dispatchPath,
    index,
    trigger,
    itemRole,
    listHeight,
    listOverflow,
    handleGlobalToggle,
    closeOnSelect,
    onHover,
    onItemSelect,
    onItemClick,
    listWidth,
    variant,
    hasArrow,
    size,
}) => {
    const handleToggle = (opened: boolean): void => {
        if (opened) {
            dispatchPath({ type: 'changed_on_level', value: item.value.toString(), level: currentLevel + 1 });
        } else {
            dispatchPath({ type: 'cut_by_level', level: currentLevel + 1 });
        }
    };

    const isCurrentListOpen = path[currentLevel + 1] === item.value.toString();

    const listId = `tree_level_${currentLevel + 2}`;
    const nextLevel = currentLevel + 1;

    if (item?.items) {
        return (
            <StyledPopover
                opened={isCurrentListOpen}
                usePortal={false}
                placement="right-start"
                trigger={trigger}
                target={
                    <DropdownItem
                        item={item}
                        index={index}
                        path={path}
                        focusedPath={focusedPath}
                        currentLevel={currentLevel}
                        itemRole={itemRole}
                        onHover={onHover}
                        onItemSelect={onItemSelect}
                        onItemClick={onItemClick}
                        variant={variant}
                        hasArrow={hasArrow}
                        ariaControls={listId}
                        ariaExpanded={isCurrentListOpen}
                        ariaLevel={nextLevel}
                        ariaLabel={item.label}
                        size={size}
                    />
                }
                onToggle={handleToggle}
                isFocusTrapped={false}
                preventOverflow={false}
            >
                <Ul
                    listHeight={listHeight}
                    listOverflow={listOverflow}
                    role="group"
                    id={listId}
                    listWidth={listWidth}
                    isInnerUl
                >
                    {item.items.map((innerItem, innerIndex) => (
                        <DropdownInner
                            key={`${innerIndex}/${currentLevel}`}
                            item={innerItem}
                            currentLevel={nextLevel}
                            focusedPath={focusedPath}
                            path={path}
                            dispatchPath={dispatchPath}
                            index={innerIndex}
                            trigger={trigger}
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
                            size={size}
                        />
                    ))}
                </Ul>
            </StyledPopover>
        );
    }

    return (
        <DropdownItem
            item={item}
            index={index}
            focusedPath={focusedPath}
            currentLevel={currentLevel}
            itemRole={itemRole}
            handleGlobalToggle={handleGlobalToggle}
            closeOnSelect={closeOnSelect}
            onHover={onHover}
            onItemSelect={onItemSelect}
            onItemClick={onItemClick}
            variant={variant}
            size={size}
        />
    );
};

export { DropdownInner };
