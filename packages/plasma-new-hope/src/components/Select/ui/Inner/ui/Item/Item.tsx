import React, { useRef, FC, useContext } from 'react';
import { cx, isEmpty } from 'src/utils';
import { useDidMountEffect } from 'src/hooks';

import { sizeToIconSize, getItemId } from '../../../../utils';
import { classes } from '../../../../Select.tokens';
import { Context } from '../../../../Select.context';

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
    StyledArrow,
    StyledIconDone,
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _checkboxAppearance,
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
                            disabled={itemDisabled}
                            checked={Boolean(checked.get(item.value))}
                            indeterminate={checked.get(item.value) === 'indeterminate'}
                            onChange={handleChange}
                            appearance={_checkboxAppearance ?? 'default'}
                        />
                    </StyledCheckboxWrapper>
                )}

                {!multiselect && checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                {!multiselect && checked.get(item.value) === 'done' && (
                    <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                )}
            </IconWrapper>

            {renderItem ? (
                <StyledText>{renderItem(item)}</StyledText>
            ) : (
                <StyledWrapper disabled={itemDisabled}>
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
                    <StyledArrow size={sizeToIconSize(size, variant)} color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
