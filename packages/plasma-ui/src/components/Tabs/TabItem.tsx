import React, { useRef, useEffect, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { TabItem as BaseTabItem, button2, buttonFocused, useForkRef } from '@salutejs/plasma-core';
import type { TabItemProps as BaseTabItemProps, AsProps } from '@salutejs/plasma-core';

import { useTabsAnimationContext } from './TabsAnimationContext';
import { StyledSlider, activeItemStyle } from './TabsSlider';

export interface TabItemProps extends AsProps, BaseTabItemProps {
    animated?: boolean;
}

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const StyledTabItem = styled(BaseTabItem)<TabItemProps>`
    ${button2};

    position: relative;

    /**
    * Определенные на компоненте Tabs css vars используем тут,
    * потому что у айтемов нет свойства size,
    * чтобы не приходилось передавать кучу пропсов
    * на компонентах контейнере (Tabs) и элементах (TabItem).
    */
    height: var(--tab-item-height);
    padding: var(--tab-item-padding-y) var(--tab-item-padding-x);

    border-radius: var(--tab-item-border-radius);
    transition: ${({ theme }) =>
        theme.lowPerformance ? 'unset' : 'background-color 0.3s ease-in-out, transform 0.1s ease-in-out'};

    /**
    * При нажатии слайдер также прожимается
    */
    &:active ~ ${StyledSlider} {
        transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.96)')};
    }

    /**
    * Если анимация отключена
    */
    ${({ animated, isActive }) =>
        !animated &&
        isActive &&
        css`
            ${activeItemStyle}
        `}

    &::before {
        content: '';

        position: absolute;
        top: calc(var(--tab-focus-border-size) * -1);
        left: calc(var(--tab-focus-border-size) * -1);
        right: calc(var(--tab-focus-border-size) * -1);
        bottom: calc(var(--tab-focus-border-size) * -1);

        display: block;
        box-sizing: content-box;

        border: var(--tab-focus-border-size) solid transparent;
        border-radius: var(--tab-item-outline-radius);

        transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'box-shadow 0.2s ease-in-out')};

        pointer-events: none;
    }

    &.focus-visible,
    &[data-focus-visible-added] {
        &::before {
            box-shadow: 0 0 0 var(--tab-focus-border-size) ${buttonFocused};
        }
    }
`;

export const StyledTabItemMemo = React.memo(StyledTabItem);

/**
 * Элемент списка вкладок, недопустимо использовать вне компонента Tabs.
 */
/**
 * Элемент списка вкладо`к, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = forwardRef<HTMLElement, TabItemProps>((props, outerRef) => {
    const innerRef = useRef<HTMLElement>(null);
    const ref = useForkRef(outerRef, innerRef);

    const { refs } = useTabsAnimationContext();

    useEffect(() => {
        refs?.register(innerRef);
        return () => refs?.unregister(innerRef);
    }, [ref, refs]);

    return <StyledTabItemMemo ref={ref} {...props} />;
});
