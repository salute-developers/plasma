import React, { useContext } from 'react';

import { keyExists } from '../../../../reducers/treePathReducer';
import { Context } from '../../../../Select.context';

import { ItemArrowLeft } from './ui/ItemArrowLeft/ItemArrowLeft';
import { ItemArrowRight } from './ui/ItemArrowRight/ItemArrowRight';
import { Props } from './Item.types';
import { ItemWrapper, ChildItems } from './Item.styles';

export const Item: React.FC<Props> = ({ item, index }) => {
    const { value, disabled, isDisabled } = item;

    const isLeaf = !item?.items;

    const {
        treePath,
        dispatchTreePath,
        arrowPlacement,
        handleItemClick,
        handleCheckboxChange,
        valueToPathMap,
    } = useContext(Context);

    const isCurrentLevelOpened = keyExists(treePath, valueToPathMap.get(value.toString()) || []);
    const itemDisabled = Boolean(disabled || isDisabled);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (!isLeaf) {
            dispatchTreePath({ type: 'toggled_level', value: valueToPathMap.get(value.toString()) || [] });
        }

        if (handleItemClick) {
            handleItemClick(item, e);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (itemDisabled) return;

        e.stopPropagation();

        handleCheckboxChange(item);
    };

    return (
        <ItemWrapper>
            {arrowPlacement === 'left' ? (
                <ItemArrowLeft
                    item={item}
                    onClick={handleClick}
                    onChange={handleChange}
                    isCurrentLevelOpened={isCurrentLevelOpened}
                    index={index}
                />
            ) : (
                <ItemArrowRight
                    item={item}
                    onClick={handleClick}
                    onChange={handleChange}
                    isCurrentLevelOpened={isCurrentLevelOpened}
                    index={index}
                />
            )}

            {!isLeaf && isCurrentLevelOpened && (
                <ChildItems>
                    {item.items?.map((item, index) => {
                        return <Item item={item} index={index} key={index} />;
                    })}
                </ChildItems>
            )}
        </ItemWrapper>
    );
};
