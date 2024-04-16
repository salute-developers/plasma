import React, { useEffect, useRef, FC } from 'react';

import { classes } from '../../Dropdown.tokens';
import { cx } from '../../../../utils';
import { IconDisclosureRight } from '../../../_Icon';

import {
    StyledContentLeft,
    StyledContentRight,
    StyledText,
    Wrapper,
    DisclosureIconWrapper,
} from './DropdownItem.styles';
import type { DropdownItemProps } from './DropdownItem.type';

export const DropdownItem: FC<DropdownItemProps> = ({
    item,
    path,
    focusedPath,
    currentLevel,
    index,
    itemRole,
    closeOnSelect,
    handleGlobalToggle,
    onHover,
    onItemSelect,
    onItemClick,
    ariaControls,
    ariaExpanded,
    ariaHasPopup,
    ariaLevel,
    ariaLabel,
    variant,
    hasArrow,
}) => {
    const { value, label, disabled, isDisabled, contentLeft, contentRight } = item;

    const ref = useRef<HTMLLIElement | null>(null);

    const isDisabledClassName = disabled || isDisabled ? classes.dropdownItemIsDisabled : undefined;
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

    const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
        if (disabled || isDisabled) {
            return;
        }

        if (onItemSelect) {
            onItemSelect(item, event);
        }

        if (onItemClick) {
            onItemClick(item, event);
        }

        if (handleGlobalToggle && closeOnSelect) {
            handleGlobalToggle(false, event);
        }
    };

    const handleHover = () => {
        if (onHover) {
            onHover(index);
        }
    };

    return (
        <Wrapper
            className={cx(isDisabledClassName, focusedClass, activeClass)}
            id={value.toString()}
            role={itemRole}
            ref={ref}
            aria-disabled={disabled || isDisabled}
            onClick={handleClick}
            onMouseEnter={handleHover}
            variant={variant}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-haspopup={ariaHasPopup}
            aria-level={ariaLevel}
            aria-label={ariaLabel}
        >
            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
            <StyledText>{label}</StyledText>
            {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}

            {item.items && hasArrow && (
                <DisclosureIconWrapper>
                    <IconDisclosureRight size="xs" color="inherit" />
                </DisclosureIconWrapper>
            )}
        </Wrapper>
    );
};
