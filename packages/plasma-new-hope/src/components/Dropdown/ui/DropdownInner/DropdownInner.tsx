import React from 'react';
import type { FC } from 'react';
import { safeUseId } from 'src/utils';

import { DropdownItem } from '../DropdownItem/DropdownItem';
import { Ul, ListWrapper } from '../../Dropdown.styles';
import { FloatingPopover } from '../../FloatingPopover';
import { getPlacement } from '../../utils';

import { DropdownInnerProps } from './DropdownInner.type';

const DropdownInner: FC<DropdownInnerProps> = ({
    item,
    currentLevel,
    path,
    dispatchPath,
    index,
    trigger,
    listMaxHeight,
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
                placement={getPlacement(item?.placement || 'right')}
                opened={isCurrentListOpen}
                onToggle={handleToggle}
                trigger={item.trigger || trigger}
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
                <ListWrapper listWidth={listWidth}>
                    <Ul id={listId} role="group" listMaxHeight={listMaxHeight} listOverflow={listOverflow}>
                        {item.items.map((innerItem, innerIndex) => (
                            <DropdownInner
                                key={`${innerIndex}/${currentLevel}`}
                                item={innerItem}
                                currentLevel={nextLevel}
                                path={path}
                                dispatchPath={dispatchPath}
                                index={innerIndex}
                                trigger={trigger}
                                listMaxHeight={listMaxHeight}
                                listOverflow={listOverflow}
                                listWidth={listWidth}
                            />
                        ))}
                    </Ul>
                </ListWrapper>
            </FloatingPopover>
        );
    }

    return <DropdownItem item={item} path={path} index={index} currentLevel={currentLevel} ariaLevel={nextLevel} />;
};

export { DropdownInner };
