import React, { useRef } from 'react';
import type { FC } from 'react';
import { safeUseId } from 'src/utils';

import { Ul, ListWrapper } from '../../Dropdown.styles';
import { FloatingPopover } from '../../FloatingPopover';
import { getPlacement } from '../../utils';

import { Item } from './ui';
import { DropdownInnerProps } from './Inner.type';

const Inner: FC<DropdownInnerProps> = ({
    item,
    currentLevel,
    path,
    dispatchPath,
    index,
    trigger,
    listWidth,
    portal,
}) => {
    const handleToggle = (opened: boolean): void => {
        if (opened) {
            dispatchPath({ type: 'changed_on_level', value: item.value.toString(), level: currentLevel + 1 });
        } else {
            dispatchPath({ type: 'cut_by_level', level: currentLevel + 1 });
        }
    };

    const listWrapperRef = useRef<HTMLDivElement>(null);

    const isCurrentListOpen = path[currentLevel + 1] === item.value.toString();

    const treeId = safeUseId();
    const listId = `${treeId}_tree_level_${currentLevel + 2}`;
    const nextLevel = currentLevel + 1;

    if (item?.items?.length) {
        return (
            <FloatingPopover
                placement={getPlacement(item?.placement || 'right')}
                opened={isCurrentListOpen}
                onToggle={handleToggle}
                trigger={item.trigger || trigger}
                target={
                    <Item
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
                portal={portal}
            >
                <ListWrapper ref={listWrapperRef} listWidth={listWidth}>
                    <Ul id={listId} role="group" listMaxHeight={item.listMaxHeight}>
                        {item.beforeList}

                        {item.items.map((innerItem, innerIndex) => (
                            <Inner
                                key={`${innerIndex}/${currentLevel}`}
                                item={innerItem}
                                currentLevel={nextLevel}
                                path={path}
                                dispatchPath={dispatchPath}
                                index={innerIndex}
                                trigger={trigger}
                                listWidth={listWidth}
                                portal={listWrapperRef}
                            />
                        ))}
                    </Ul>
                </ListWrapper>
            </FloatingPopover>
        );
    }

    return <Item item={item} path={path} index={index} currentLevel={currentLevel} ariaLevel={nextLevel} />;
};

export { Inner };
