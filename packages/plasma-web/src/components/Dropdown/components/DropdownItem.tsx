import React, { forwardRef, SyntheticEvent } from 'react';
import { DropdownItemProps } from '@salutejs/plasma-hope';
import { component, dropdownItemOldConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import styled from 'styled-components';
import { IconDone } from '@salutejs/plasma-icons';
import { accent } from '@salutejs/plasma-core';

const mergedItemConfig = mergeConfig(dropdownItemOldConfig);
export const DropdownNewHopeItem = component(mergedItemConfig);

const StyledCheck = styled(IconDone)`
    margin-left: auto;
    pointer-events: none;
    margin-right: -0.5rem;
`;

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
    const {
        value,
        label,
        color,
        contentLeft,
        isActive,
        isHovered,
        index,
        onClick,
        onHover,
        onFocus,
        items,
        isDisabled,
        style,
        ...rest
    } = props;

    const handleClick = (e: SyntheticEvent<Element, Event>) => {
        if (onClick) {
            onClick({ value, label, color, contentLeft }, e);
        }
    };

    const handleHover = () => {
        if (onHover) {
            onHover(index);
        }
    };

    return (
        <DropdownNewHopeItem
            {...(rest as any)}
            value={value}
            text={label}
            ref={ref}
            style={{ ...style, color }}
            contentLeft={contentLeft}
            contentRight={isActive ? <StyledCheck size="s" color={accent} /> : undefined}
            onClick={handleClick}
            onMouseOver={handleHover}
            onFocus={onFocus}
            disabled={isDisabled}
        />
    );
});
