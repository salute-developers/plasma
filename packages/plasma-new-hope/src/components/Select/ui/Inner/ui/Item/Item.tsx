import React, { useEffect, useRef, FC, useContext } from 'react';

import { sizeToIconSize } from '../../../../utils';
import { classes } from '../../../../Select.tokens';
import { cx, isEmpty } from '../../../../../../utils';
import { IconDisclosureRightCentered, IconDone } from '../../../../../_Icon';
import { Context } from '../../../../Select';

import { ItemProps } from './Item.types';
import {
    StyledContentLeft,
    StyledContentRight,
    StyledText,
    Wrapper,
    DisclosureIconWrapper,
    StyledCheckbox,
    IconWrapper,
    StyledIndicator,
    StyledCheckboxWrapper,
} from './Item.styles';

export const Item: FC<ItemProps> = ({
    item,
    path,
    currentLevel,
    index,
    ariaControls,
    ariaExpanded,
    ariaLevel,
    ariaLabel,
}) => {
    const { value, label, disabled, isDisabled, color, contentLeft, contentRight } = item;
    const ref = useRef<HTMLLIElement | null>(null);

    const {
        focusedPath,
        checked,
        multiselect,
        size,
        handleCheckboxChange,
        handleItemClick,
        variant,
        renderItem,
        valueToItemMap,
    } = useContext(Context);

    const itemDisabled = Boolean(disabled || isDisabled);

    const isDisabledClassName = itemDisabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

    useEffect(() => {
        if (focusedClass && ref?.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focusedClass]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (itemDisabled) return;

        e.stopPropagation();

        handleCheckboxChange(item);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (itemDisabled) {
            e.stopPropagation();
            return;
        }

        handleItemClick(item, e);
    };

    return (
        <Wrapper
            className={cx(isDisabledClassName, focusedClass, activeClass)}
            id={value.toString()}
            ref={ref}
            onClick={handleClick}
            variant={variant}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-level={ariaLevel}
            aria-label={ariaLabel}
            role="treeitem"
        >
            <IconWrapper variant={variant}>
                {multiselect && (
                    <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                        <StyledCheckbox
                            checked={Boolean(checked.get(item.value))}
                            indeterminate={checked.get(item.value) === 'indeterminate'}
                            onChange={handleChange}
                            className={classes.selectItemCheckbox}
                        />
                    </StyledCheckboxWrapper>
                )}

                {!multiselect && checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                {!multiselect && checked.get(item.value) === 'done' && (
                    <IconDone size={sizeToIconSize(size, variant)} color="inherit" />
                )}
            </IconWrapper>

            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}

            <StyledText color={color}>{(renderItem && renderItem(valueToItemMap.get(value)!)) || label}</StyledText>

            {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}

            {!isEmpty(item.items) && (
                <DisclosureIconWrapper>
                    <IconDisclosureRightCentered size={sizeToIconSize(size, variant)} color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
