import React from 'react';
import type { FC } from 'react';

import { isEmpty } from '../../../../utils';
import { Ul, StyledPopover } from '../../SelectNew.styles';

import { Item } from './elements/Item/Item';
import { InnerProps } from './Inner.type';

export const Inner: FC<InnerProps> = ({ item, currentLevel, path, dispatchPath, index }) => {
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
                isOpen={isCurrentListOpen}
                usePortal={false}
                placement="right-start"
                trigger="click"
                target={<Item item={item} path={path} currentLevel={currentLevel} index={index} />}
                onToggle={handleToggle}
                isFocusTrapped={false}
                preventOverflow={false}
            >
                <Ul role="group" id={listId} isInnerUl>
                    {item.items?.map((innerItem: any, innerIndex: any) => (
                        <Inner
                            key={`${innerIndex}/${currentLevel}`}
                            item={innerItem}
                            currentLevel={nextLevel}
                            path={path}
                            dispatchPath={dispatchPath}
                            index={innerIndex}
                        />
                    ))}
                </Ul>
            </StyledPopover>
        );
    }

    return <Item item={item} path={path} index={index} currentLevel={currentLevel} />;
};
