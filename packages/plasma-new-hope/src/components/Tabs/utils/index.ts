import { MutableRefObject } from 'react';

const getIsFirstOverflowingTab = (
    item: MutableRefObject<HTMLElement | null>,
    maxScroll: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal',
) => {
    if (!item.current) {
        return;
    }

    const currentOffset = orientation === 'horizontal' ? item.current.offsetLeft : item.current.offsetTop;

    if (currentOffset === undefined) {
        return;
    }

    return currentOffset < maxScroll;
};

const getIsLastOverflowingTab = (
    item: MutableRefObject<HTMLElement | null>,
    minScroll: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal',
) => {
    if (!item.current) {
        return;
    }

    const currentOffset = orientation === 'horizontal' ? item.current.offsetLeft : item.current.offsetTop;

    if (currentOffset === undefined) {
        return;
    }

    const additionalOffset = orientation === 'horizontal' ? item.current.offsetWidth : item.current.offsetHeight;

    return currentOffset + additionalOffset > minScroll;
};

export const getFirstOverflowingTab = (
    items: MutableRefObject<HTMLElement | null>[],
    maxScroll: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal',
) => items.find((item) => getIsFirstOverflowingTab(item, maxScroll, orientation));

export const getLastOverflowingTab = (
    items: MutableRefObject<HTMLElement | null>[],
    minScroll: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal',
) => items.find((item) => getIsLastOverflowingTab(item, minScroll, orientation));
