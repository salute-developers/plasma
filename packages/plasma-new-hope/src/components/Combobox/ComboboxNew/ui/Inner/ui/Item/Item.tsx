import React, { useRef, FC, useContext } from 'react';

import { sizeToIconSize, getItemId } from '../../../../utils';
import { classes } from '../../../../Combobox.tokens';
import { cx, isEmpty } from '../../../../../../../utils';
import { Context } from '../../../../Combobox.context';
import { useDidMountEffect } from '../../../../../../../hooks';

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
        treeId,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _checkboxAppearance,
    } = useContext(Context);

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
            aria-selected={Boolean(checked.get(item.value))}
        >
            <IconWrapper variant={variant}>
                {multiple && (
                    <StyledCheckboxWrapper onClick={(e) => e.stopPropagation()}>
                        <StyledCheckbox
                            disabled={disabled}
                            checked={Boolean(checked.get(item.value))}
                            indeterminate={checked.get(item.value) === 'indeterminate'}
                            onChange={handleChange}
                            appearance={_checkboxAppearance ?? 'default'}
                        />
                    </StyledCheckboxWrapper>
                )}

                {!multiple && checked.get(item.value) === 'dot' && <StyledIndicator size="s" view="default" />}

                {!multiple && checked.get(item.value) === 'done' && (
                    <StyledIconDone size={sizeToIconSize(size, variant)} color="inherit" />
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
