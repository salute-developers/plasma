import React, { useContext, useRef } from 'react';
import { useDidMountEffect } from 'src/hooks';
import { isArraysEqual, cx } from 'src/utils';

import { sizeToIconSize } from '../../../../utils';
import { classes } from '../../../../Combobox.tokens';
import { keyExists } from '../../../../reducers/treePathReducer';
import { Context } from '../../../../Combobox.context';
import { ItemContent, ItemSelectionIcon } from '../../../ItemView/ItemView';

import { Props } from './Item.types';
import {
    ItemWrapper,
    ChildItems,
    Offset,
    DisclosureIconWrapper,
    StyledArrowRight,
    Wrapper,
    StyledArrowLeft,
} from './Item.styles';

export const Item: React.FC<Props> = ({ item, pathToItem }) => {
    const { value, disabled } = item;

    const isLeaf = !item?.items;

    const {
        checked,
        multiple,
        size,
        variant,
        renderItem,
        renderSelectionIcon,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _checkboxAppearance,
        focusedPath,
        treePath,
        dispatchTreePath,
        arrowPlacement,
        handleItemClick,
        handleCheckboxChange,
        valueToPathMap,
        singleLine,
    } = useContext(Context);

    const ref = useRef<HTMLDivElement | null>(null);

    const itemDisabled = disabled;
    const disabledClassName = itemDisabled ? classes.dropdownItemIsDisabled : undefined;
    const checkedValue = checked.get(item.value) || false;

    const currentItemDepth = (valueToPathMap.get(item.value.toString())?.length || 0) - 1;

    const isCurrentLevelOpened = keyExists(treePath, valueToPathMap.get(value.toString()) || []);

    const withArrowInverse = isCurrentLevelOpened ? classes.arrowInverse : undefined;

    const focusedClass = isArraysEqual(pathToItem, focusedPath) ? classes.dropdownItemIsFocused : undefined;

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (itemDisabled) return;

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

    useDidMountEffect(() => {
        if (focusedClass && ref?.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focusedClass]);

    const itemSelectionIcon = (
        <ItemSelectionIcon
            checked={checkedValue}
            disabled={itemDisabled}
            multiple={multiple}
            size={size}
            variant={variant}
            renderSelectionIcon={renderSelectionIcon}
            checkboxAppearance={_checkboxAppearance}
            onChange={handleChange}
        />
    );

    return (
        <ItemWrapper>
            <Wrapper
                ref={ref}
                className={cx(focusedClass, disabledClassName)}
                onClick={handleClick}
                variant={variant}
                role="treeitem"
            >
                <Offset depth={currentItemDepth} />

                {arrowPlacement === 'left' && (
                    <DisclosureIconWrapper visibility={isLeaf ? 'hidden' : 'visible'}>
                        <StyledArrowLeft
                            size={sizeToIconSize(size, variant)}
                            color="inherit"
                            className={withArrowInverse}
                        />
                    </DisclosureIconWrapper>
                )}

                {multiple && itemSelectionIcon}

                {!multiple && arrowPlacement === 'right' && itemSelectionIcon}

                <ItemContent item={item} renderItem={renderItem} singleLine={singleLine} />

                {!multiple && arrowPlacement === 'left' && itemSelectionIcon}

                {arrowPlacement === 'right' && (
                    <DisclosureIconWrapper visibility={isLeaf ? 'hidden' : 'visible'}>
                        <StyledArrowRight
                            size={sizeToIconSize(size, variant)}
                            color="inherit"
                            className={withArrowInverse}
                        />
                    </DisclosureIconWrapper>
                )}
            </Wrapper>

            {!isLeaf && isCurrentLevelOpened && (
                <ChildItems>
                    {item.items?.map((item, index) => {
                        return <Item item={item} key={item.value} pathToItem={[...pathToItem, index]} />;
                    })}
                </ChildItems>
            )}
        </ItemWrapper>
    );
};
