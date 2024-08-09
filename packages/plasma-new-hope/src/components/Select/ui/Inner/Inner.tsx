import React from 'react';
import type { FC } from 'react';

import { isEmpty } from '../../../../utils';
import { Ul, StyledPopover } from '../../Select.styles';

import type { MergedDropdownNodeTransformed } from './ui/Item/Item.types';
import { Item } from './ui';
import { InnerProps } from './Inner.type';

export const Inner: FC<InnerProps> = ({ item, currentLevel, path, dispatchPath, index, listWidth }) => {
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

    if (!isEmpty(item?.items)) {
        return (
            <StyledPopover
                opened={isCurrentListOpen}
                usePortal={false}
                placement="right-start"
                trigger="click"
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
                onToggle={handleToggle}
                isFocusTrapped={false}
                preventOverflow={false}
            >
                <Ul role="group" id={listId} isInnerUl listWidth={listWidth}>
                    {item.items?.map((innerItem: MergedDropdownNodeTransformed, innerIndex: number) => (
                        <Inner
                            key={`${innerIndex}/${currentLevel}`}
                            item={innerItem}
                            currentLevel={nextLevel}
                            path={path}
                            dispatchPath={dispatchPath}
                            index={innerIndex}
                            listWidth={listWidth}
                        />
                    ))}
                </Ul>
            </StyledPopover>
        );
    }

    return <Item item={item} path={path} index={index} currentLevel={currentLevel} ariaLevel={nextLevel} />;
};
