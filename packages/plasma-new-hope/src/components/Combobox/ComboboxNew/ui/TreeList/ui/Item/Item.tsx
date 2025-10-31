import React, { useContext, useRef } from 'react';
import { classes } from 'src/components/Select/Select.tokens';
import { sizeToIconSize } from 'src/components/Select/utils';
import { useDidMountEffect } from 'src/hooks';
import { isArraysEqual, cx } from 'src/utils';

import { keyExists } from '../../../../reducers/treePathReducer';
import { Context } from '../../../../Combobox.context';

import { Props } from './Item.types';
import {
    ItemWrapper,
    ChildItems,
    Offset,
    IconWrapper,
    StyledCheckboxWrapper,
    StyledCheckbox,
    StyledIndicator,
    StyledIconDone,
    StyledText,
    StyledWrapper,
    StyledCell,
    DisclosureIconWrapper,
    StyledArrowRight,
    Wrapper,
    StyledArrowLeft,
} from './Item.styles';

export const Item: React.FC<Props> = ({ item, pathToItem }) => {
    const { label, value, disabled, contentLeft, contentRight } = item;

    const isLeaf = !item?.items;

    const {
        checked,
        multiple,
        size,
        variant,
        renderItem,
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
    } = useContext(Context);

    const ref = useRef<HTMLDivElement | null>(null);

    const itemDisabled = disabled;
    const disabledClassName = itemDisabled ? classes.dropdownItemIsDisabled : undefined;

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

                {multiple && (
                    <IconWrapper variant={variant}>
                        <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                            <StyledCheckbox
                                disabled={itemDisabled}
                                checked={Boolean(checked.get(item.value))}
                                indeterminate={checked.get(item.value) === 'indeterminate'}
                                onChange={handleChange}
                                appearance={_checkboxAppearance ?? 'default'}
                            />
                        </StyledCheckboxWrapper>
                    </IconWrapper>
                )}

                {!multiple && arrowPlacement === 'right' && (
                    <IconWrapper variant={variant}>
                        {checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                        {checked.get(item.value) === 'done' && (
                            <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                        )}
                    </IconWrapper>
                )}

                {renderItem ? (
                    <StyledText>{renderItem(item)}</StyledText>
                ) : (
                    <StyledWrapper>
                        <StyledCell
                            contentLeft={contentLeft}
                            contentRight={contentRight}
                            // TODO: #1548
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            title={<span>{label}</span>}
                        />
                    </StyledWrapper>
                )}

                {!multiple && arrowPlacement === 'left' && (
                    <IconWrapper variant={variant}>
                        {checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                        {checked.get(item.value) === 'done' && (
                            <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                        )}
                    </IconWrapper>
                )}

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
