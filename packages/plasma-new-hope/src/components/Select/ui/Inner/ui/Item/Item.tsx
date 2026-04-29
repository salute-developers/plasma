import React, { useRef, FC } from 'react';
import { cx, isEmpty } from 'src/utils';
import { useDidMountEffect } from 'src/hooks';

import { sizeToIconSize, getItemId, mapCheckedVariants } from '../../../../utils';
import { classes } from '../../../../Select.tokens';
import { useSelectContext } from '../../../../Select.context';

import { ItemProps } from './Item.types';
import {
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
    const { value, label, disabled, contentLeft, contentRight, className, ...rest } = item;

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
        renderSelectionIcon,
        treeId,
        singleLine,
        _checkboxAppearance,
    } = useSelectContext();

    const checkedValue = checked.get(item.value) || false;

    const disabledClassName = disabled ? classes.dropdownItemIsDisabled : undefined;
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
        if (disabled) return;

        e.stopPropagation();

        handleCheckboxChange(item);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (disabled) {
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
            aria-selected={Boolean(checkedValue)}
        >
            <IconWrapper variant={variant}>
                {renderSelectionIcon ? (
                    renderSelectionIcon(mapCheckedVariants(checkedValue, multiselect))
                ) : (
                    <>
                        {multiselect && (
                            <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                                <StyledCheckbox
                                    disabled={disabled}
                                    checked={Boolean(checkedValue)}
                                    indeterminate={checkedValue === 'indeterminate'}
                                    onChange={handleChange}
                                    appearance={_checkboxAppearance ?? 'default'}
                                />
                            </StyledCheckboxWrapper>
                        )}

                        {!multiselect && checkedValue === 'dot' && <StyledIndicator size="s" view="default" />}

                        {!multiselect && checkedValue === 'done' && (
                            <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                        )}
                    </>
                )}
            </IconWrapper>

            {renderItem ? (
                <StyledText>{renderItem(item)}</StyledText>
            ) : (
                <StyledCell
                    contentLeft={contentLeft}
                    contentRight={contentRight}
                    title={label}
                    className={singleLine ? classes.singleLineMode : ''}
                />
            )}

            {!isEmpty(item.items) && (
                <DisclosureIconWrapper>
                    <StyledArrow size={sizeToIconSize(size, variant)} color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
