import React, { useRef, useCallback, useMemo, forwardRef } from 'react';
import type { DetailedHTMLProps, HTMLAttributes, ReactNode, SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import { body1, applyDisabled, applyEllipsis, useForkRef } from '@salutejs/plasma-core';
import { IconChevronRight, IconDone } from '@salutejs/plasma-icons';

import type { DropdownItem as DropdownItemType, DropdownNode as DropdownNodeType, OnHover } from './Dropdown.types';

export interface DropdownItemProps
    extends DropdownNodeType,
        Omit<DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'onClick' | 'ref'> {
    /**
     * Цвет текста.
     */
    color?: string;
    /**
     * Слот для контента слева, например `Icon`.
     */
    contentLeft?: ReactNode;
    /**
     * Элемент активен (выбран).
     */
    isActive?: boolean;
    /**
     * Программный hover (нужен для навигации с клавиатуры).
     */
    isHovered?: boolean;
    index: number;
    onClick?: (item: DropdownItemType, event: SyntheticEvent) => void;
    onHover?: OnHover;
    onFocus?: () => void;
}

interface StyledDropdownItemProps {
    $withAssistive?: boolean;
    $hover?: boolean;
    $disabled?: boolean;
    $color?: string;
}

const StyledDropdownItem = styled.li<StyledDropdownItemProps>`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;

    text-decoration: none;

    height: var(--plasma-dropdown-item-height, 3rem);
    padding: var(--plasma-dropdown-item-padding, 1rem);
    border-radius: var(--plasma-dropdown-item-border-radius, 0);

    font-family: var(--plasma-dropdown-item-font-family, ${body1.fontFamily});
    font-size: var(--plasma-dropdown-item-font-size, ${body1.fontSize});
    font-weight: var(--plasma-dropdown-item-font-weight, ${body1.fontWeight});
    line-height: var(--plasma-dropdown-item-line-height, ${body1.lineHeight});
    letter-spacing: var(--plasma-dropdown-item-letter-spacing, ${body1.letterSpacing});

    background-color: transparent;
    color: ${({ $color }) => $color || 'var(--text-primary)'};
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    ${({ $withAssistive, $color }) =>
        !$withAssistive &&
        css`
            /* stylelint-disable-next-line selector-nested-pattern */
            &:hover,
            &:focus {
                color: ${$color || 'var(--text-primary)'};
                background-color: var(--surface-transparent-secondary);
            }
        `}

    &:focus {
        outline: 0 none;
    }

    ${({ $hover, $color }) =>
        $hover &&
        css`
            color: ${$color || 'var(--text-primary)'};
            background-color: var(--surface-transparent-secondary);
        `}

    &:active {
        background-color: var(--surface-transparent-tertiary);
    }

    ${applyDisabled}
`;
const StyledContent = styled.div`
    display: inline-flex;
    margin-right: 0.375rem;
`;
const StyledText = styled.span`
    ${applyEllipsis};

    margin-right: 0.625rem;
    pointer-events: none;
    user-select: none;
`;
const StyledChevron = styled(IconChevronRight)`
    margin-left: auto;
    pointer-events: none;
    margin-right: -0.25rem;
`;
const StyledCheck = styled(IconDone)`
    margin-left: auto;
    pointer-events: none;
    margin-right: -0.5rem;
`;
const StyledDot = styled.div`
    width: 0.375rem;
    height: 0.375rem;

    background-color: var(--text-accent);
    border-radius: 50%;
`;

/**
 * Элемент выпадающего списка.
 */
export const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>((props, outerRef) => {
    const {
        value,
        label,
        isActive,
        isDisabled,
        isHovered,
        color,
        contentLeft,
        items = [],
        role = 'menuitem',
        index,
        onClick: onClickExternal,
        onHover,
        onFocus,
        ...rest
    } = props;

    const ref = useRef<HTMLLIElement>(null);
    const forkRef = useForkRef(outerRef, ref);
    const hasItems = Boolean(items.length);

    const isActiveAsSingleOrNode = Boolean(isActive || items.filter((item) => item.isActive)?.length);

    const contentRight = useMemo(() => {
        if (hasItems) {
            return (
                <>
                    {isActiveAsSingleOrNode && <StyledDot />}
                    <StyledChevron size="xs" />
                </>
            );
        }

        if (isActive) {
            return <StyledCheck size="s" color="var(--text-accent)" />;
        }

        return null;
    }, [isActive, isActiveAsSingleOrNode, hasItems]);

    const onClick = useCallback<React.MouseEventHandler<HTMLLIElement>>(
        (event) => {
            event.preventDefault();

            const targetIsItem = event.target === ref.current;
            const targetInItem = ref.current?.contains(event.target as Element);

            if (value !== undefined && !isDisabled && (targetIsItem || targetInItem)) {
                onClickExternal?.({ value, label }, event);
            }
        },
        [value, label, isDisabled, onClickExternal],
    );

    const onMouseOver = useCallback(() => {
        onHover?.(index);
    }, [value, label, isDisabled, onClickExternal]);

    return (
        <StyledDropdownItem
            {...rest}
            ref={forkRef}
            $withAssistive={Boolean(onHover)}
            $hover={isHovered}
            $disabled={isDisabled}
            $color={color}
            role={role}
            aria-label={label}
            aria-disabled={isDisabled}
            aria-selected={role === 'option' ? isActiveAsSingleOrNode : undefined}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onFocus={onFocus}
        >
            {contentLeft && <StyledContent>{contentLeft}</StyledContent>}
            {label && <StyledText role="presentation">{label}</StyledText>}
            {contentRight}
        </StyledDropdownItem>
    );
});
