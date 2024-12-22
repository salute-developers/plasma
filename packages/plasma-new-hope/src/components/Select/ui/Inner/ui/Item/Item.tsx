import React, { useRef, FC, useContext } from 'react';

import { sizeToIconSize, getItemId } from '../../../../utils';
import { classes } from '../../../../Select.tokens';
import { cx, isEmpty } from '../../../../../../utils';
import { IconDisclosureRightCentered, IconDone } from '../../../../../_Icon';
import { Context } from '../../../../Select.context';
import { useDidMountEffect } from '../../../../../../hooks';

import { ItemProps } from './Item.types';
import {
    StyledWrapper,
    StyledCell,
    StyledCheckbox,
    StyledIndicator,
    DisclosureIconWrapper,
    IconWrapper,
    StyledText,
    Wrapper,
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
    const { value, label, disabled, isDisabled, contentLeft, contentRight, className, ...rest } = item;

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
        treeId,
    } = useContext(Context);

    const itemDisabled = Boolean(disabled || isDisabled);

    const disabledClassName = itemDisabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

    useDidMountEffect(() => {
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
            {...rest}
            className={cx(disabledClassName, focusedClass, activeClass, className)}
            id={getItemId(treeId, value.toString())}
            ref={ref}
            onClick={handleClick}
            variant={variant}
            role="treeitem"
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-level={ariaLevel}
            aria-label={ariaLabel}
            aria-selected={Boolean(checked.get(item.value))}
        >
            <IconWrapper variant={variant}>
                {multiselect && (
                    <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                        <StyledCheckbox
                            checked={Boolean(checked.get(item.value))}
                            indeterminate={checked.get(item.value) === 'indeterminate'}
                            onChange={handleChange}
                        />
                    </StyledCheckboxWrapper>
                )}

                {!multiselect && checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                {!multiselect && checked.get(item.value) === 'done' && (
                    <IconDone size={sizeToIconSize(size, variant)} color="inherit" />
                )}
            </IconWrapper>

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

            {!isEmpty(item.items) && (
                <DisclosureIconWrapper>
                    <IconDisclosureRightCentered size={sizeToIconSize(size, variant)} color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
