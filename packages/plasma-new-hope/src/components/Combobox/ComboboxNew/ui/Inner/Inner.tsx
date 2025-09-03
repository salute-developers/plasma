import React, { useRef } from 'react';
import type { FC } from 'react';
import { safeUseId } from 'src/utils';

import { FloatingPopover } from '../../FloatingPopover';
import { isEmpty } from '../../../../../utils';
import { Ul, ListWrapper } from '../../Combobox.styles';

import type { ItemOptionTransformed } from './ui/Item/Item.types';
import { Item } from './ui';
import { InnerProps } from './Inner.type';

export const Inner: FC<InnerProps> = ({ item, currentLevel, path, dispatchPath, index, listWidth, portal }) => {
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

    if (!isEmpty(item?.items)) {
        return (
            <FloatingPopover
                placement={item?.placement || 'right-start'}
                opened={isCurrentListOpen}
                onToggle={handleToggle}
                target={
                    <Item
                        item={item}
                        path={path}
                        currentLevel={currentLevel}
                        index={index}
                        ariaControls={listId}
                        ariaExpanded={isCurrentListOpen}
                        ariaLevel={nextLevel}
                        ariaLabel={item.label}
                    />
                }
                isInner
                portal={portal}
            >
                <ListWrapper listWidth={listWidth} ref={listWrapperRef}>
                    <Ul role="group" id={listId} virtual={false} listMaxHeight={item?.listMaxHeight}>
                        {item.items?.map((innerItem: ItemOptionTransformed, innerIndex: number) => (
                            <Inner
                                key={`${innerIndex}/${currentLevel}`}
                                item={innerItem}
                                currentLevel={nextLevel}
                                path={path}
                                dispatchPath={dispatchPath}
                                index={innerIndex}
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
