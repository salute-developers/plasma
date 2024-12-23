import React from 'react';
import type { FC } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { DropdownItem } from '../DropdownItem/DropdownItem';
import { Ul } from '../../Dropdown.styles';
import { FloatingPopover } from '../../FloatingPopover';

import { DropdownInnerProps } from './DropdownInner.type';

const DropdownInner: FC<DropdownInnerProps> = ({
    item,
    currentLevel,
    path,
    dispatchPath,
    index,
    trigger,
    listHeight,
    listOverflow,
    listWidth,
}) => {
    const handleToggle = (opened: boolean): void => {
        if (opened) {
            dispatchPath({ type: 'changed_on_level', value: item.value.toString(), level: currentLevel + 1 });
        } else {
            dispatchPath({ type: 'cut_by_level', level: currentLevel + 1 });
        }
    };

    const isCurrentListOpen = path[currentLevel + 1] === item.value.toString();

    const treeId = safeUseId();
    const listId = `${treeId}_tree_level_${currentLevel + 2}`;
    const nextLevel = currentLevel + 1;

    if (item?.items) {
        return (
            <FloatingPopover
                placement="right-start"
                opened={isCurrentListOpen}
                onToggle={handleToggle}
                trigger={trigger}
                target={
                    <DropdownItem
                        item={item}
                        index={index}
                        path={path}
                        currentLevel={currentLevel}
                        ariaControls={listId}
                        ariaExpanded={isCurrentListOpen}
                        ariaLevel={nextLevel}
                        ariaLabel={item.label}
                    />
                }
                isInner
            >
                <Ul
                    id={listId}
                    role="group"
                    isInnerUl
                    listHeight={listHeight}
                    listOverflow={listOverflow}
                    listWidth={listWidth}
                >
                    {item.items.map((innerItem, innerIndex) => (
                        <DropdownInner
                            key={`${innerIndex}/${currentLevel}`}
                            item={innerItem}
                            currentLevel={nextLevel}
                            path={path}
                            dispatchPath={dispatchPath}
                            index={innerIndex}
                            trigger={trigger}
                            listHeight={listHeight}
                            listOverflow={listOverflow}
                            listWidth={listWidth}
                        />
                    ))}
                </Ul>
            </FloatingPopover>
        );
    }

    return <DropdownItem item={item} path={path} index={index} currentLevel={currentLevel} ariaLevel={nextLevel} />;
};

export { DropdownInner };
