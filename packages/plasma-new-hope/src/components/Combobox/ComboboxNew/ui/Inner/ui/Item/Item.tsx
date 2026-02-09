import React, { useRef, FC, useContext } from 'react';
import { cx, isEmpty } from 'src/utils';
import { useDidMountEffect } from 'src/hooks';

import { sizeToIconSize, getItemId, mapCheckedVariants } from '../../../../utils';
import { classes } from '../../../../Combobox.tokens';
import { Context } from '../../../../Combobox.context';

import { ItemProps } from './Item.types';
import {
    StyledWrapper,
    StyledText,
    Wrapper,
    DisclosureIconWrapper,
    StyledCheckbox,
    IconWrapper,
    StyledIndicator,
    StyledCheckboxWrapper,
    StyledCell,
    StyledIconDone,
    StyledArrow,
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
        multiple,
        size,
        handleCheckboxChange,
        handleItemClick,
        variant,
        renderItem,
        renderSelectionIcon,
        treeId,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _checkboxAppearance,
    } = useContext(Context);

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
            id={getItemId(treeId, value)}
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
                    renderSelectionIcon(mapCheckedVariants(checkedValue, multiple))
                ) : (
                    <>
                        {multiple && (
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
                        {!multiple && checkedValue === 'dot' && <StyledIndicator size="s" view="default" />}
                        {!multiple && checkedValue === 'done' && (
                            <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
                        )}
                    </>
                )}
            </IconWrapper>

            {renderItem ? (
                <StyledText>{renderItem(item)}</StyledText>
            ) : (
                <StyledWrapper>
                    <StyledCell
                        view="default"
                        size="l"
                        contentLeft={contentLeft}
                        contentRight={contentRight}
                        alignContentLeft="center"
                        alignContentRight="center"
                        title={label}
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
