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
}) => {
    const handleToggle = (opened: boolean): void => {
        if (opened) {
            dispatchPath({ type: 'changed_on_level', value: item.value.toString(), level: currentLevel + 1 });
        } else {
            dispatchPath({ type: 'cut_by_level', level: currentLevel + 1 });
        }
    };

    const isCurrentListOpen = path[currentLevel + 1] === item.value.toString();

    if (item?.items) {
        return (
            <StyledPopover
                isOpen={isCurrentListOpen}
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
                        onHover={onHover}
                        onItemSelect={onItemSelect}
                        onItemClick={onItemClick}
                        variant={variant}
                        hasArrow={hasArrow}
                        ariaControls={`listbox${currentLevel + 2}`}
                        ariaExpanded={isCurrentListOpen}
                        ariaHasPopup="listbox"
                        ariaLevel={currentLevel + 1}
                        ariaLabel={item.label}
                    />
                }
                onToggle={handleToggle}
                isFocusTrapped={false}
            >
                <Ul
                    listHeight={listHeight}
                    listOverflow={listOverflow}
                    role="listbox"
                    id={`listbox${currentLevel + 2}`}
                    listWidth={listWidth}
                    isInnerUl
                >
                    {item.items.map((innerItem, innerIndex) => (
                        <DropdownInner
                            key={`${innerIndex}/currentLevel`}
                            item={innerItem}
                            currentLevel={currentLevel + 1}
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
        />
    );
};

export { DropdownInner };
