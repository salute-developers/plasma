import { useCallback, useEffect, useLayoutEffect } from 'react';
import type { MutableRefObject } from 'react';

import type { TabItemRefs } from '../../TabsContext';
import { tokens } from '../../tokens';

type UseTabsSelectionProps = {
    refs: TabItemRefs;
    trackRef: MutableRefObject<HTMLElement | null>;
    selectionRef: MutableRefObject<HTMLElement | null>;
};

const getTokenValue = (style: CSSStyleDeclaration, token: string) => style.getPropertyValue(token).trim();

export const useTabsSelection = ({ refs, trackRef, selectionRef }: UseTabsSelectionProps) => {
    const updateSelection = useCallback(() => {
        const selection = selectionRef.current;
        const item = refs.selectedItem;

        if (!selection) {
            return;
        }

        if (!item) {
            selection.style.opacity = '0';
            return;
        }

        const itemStyle = getComputedStyle(item);
        const setProperty = (token: string, value: string) => selection.style.setProperty(token, value);

        selection.style.opacity = itemStyle.opacity;
        selection.style.transform = `translate3d(${item.offsetLeft}px, ${item.offsetTop}px, 0)`;
        selection.style.width = `${item.offsetWidth}px`;
        selection.style.height = `${item.offsetHeight}px`;

        setProperty(
            tokens.itemSelectedBackgroundColor,
            getTokenValue(itemStyle, tokens.itemSelectedBackgroundColor) || itemStyle.backgroundColor,
        );
        setProperty(
            tokens.itemSelectedBackgroundColorHover,
            getTokenValue(itemStyle, tokens.itemSelectedBackgroundColorHover) || itemStyle.backgroundColor,
        );
        setProperty(
            tokens.itemBorderRadius,
            getTokenValue(itemStyle, tokens.itemBorderRadius) || itemStyle.borderRadius,
        );
        setProperty(tokens.itemSelectedDividerColor, getTokenValue(itemStyle, tokens.itemSelectedDividerColor));
        setProperty(
            tokens.itemSelectedDividerColorHover,
            getTokenValue(itemStyle, tokens.itemSelectedDividerColorHover),
        );
        setProperty(tokens.itemSelectedDividerHeight, getTokenValue(itemStyle, tokens.itemSelectedDividerHeight));
        setProperty(tokens.itemSelectedDividerWidth, getTokenValue(itemStyle, tokens.itemSelectedDividerWidth));
    }, [refs, selectionRef]);

    useLayoutEffect(updateSelection);

    useEffect(() => {
        if (!trackRef.current || typeof ResizeObserver === 'undefined') {
            return undefined;
        }

        const observer = new ResizeObserver(updateSelection);
        observer.observe(trackRef.current);

        return () => observer.disconnect();
    }, [trackRef, updateSelection]);
};
