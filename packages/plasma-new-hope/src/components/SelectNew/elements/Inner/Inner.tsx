import React from 'react';
import type { FC } from 'react';

import { Item } from '../Item/Item';
import { Ul, StyledPopover } from '../../SelectNew.styles';

import { SelectInnerProps } from './Inner.type';

export const Inner: FC<SelectInnerProps> = ({
    item,
    currentLevel,
    focusedPath,
    path,
    dispatchPath,
    index,
    handleGlobalToggle,
    checked,
    setChecked,
    multiselect,
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
                isOpen={isCurrentListOpen}
                usePortal={false}
                placement="right-start"
                trigger="click"
                target={
                    <Item
                        item={item}
                        index={index}
                        path={path}
                        focusedPath={focusedPath}
                        currentLevel={currentLevel}
                        ariaControls={listId}
                        ariaExpanded={isCurrentListOpen}
                        ariaLevel={nextLevel}
                        ariaLabel={item.label}
                        checked={checked}
                        setChecked={setChecked}
                        multiselect={multiselect}
                        size={size}
                    />
                }
                onToggle={handleToggle}
                isFocusTrapped={false}
                preventOverflow={false}
            >
                <Ul role="group" id={listId} isInnerUl>
                    {item.items.map((innerItem: any, innerIndex: any) => (
                        <Inner
                            key={`${innerIndex}/${currentLevel}`}
                            item={innerItem}
                            currentLevel={nextLevel}
                            focusedPath={focusedPath}
                            path={path}
                            dispatchPath={dispatchPath}
                            index={innerIndex}
                            handleGlobalToggle={handleGlobalToggle}
                            checked={checked}
                            setChecked={setChecked}
                            multiselect={multiselect}
                            size={size}
                        />
                    ))}
                </Ul>
            </StyledPopover>
        );
    }

    return (
        <Item
            item={item}
            index={index}
            focusedPath={focusedPath}
            currentLevel={currentLevel}
            handleGlobalToggle={handleGlobalToggle}
            checked={checked}
            setChecked={setChecked}
            multiselect={multiselect}
            size={size}
        />
    );
};
